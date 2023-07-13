import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit{
  formReg: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.userService.registrer(this.formReg.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['login']);
    })
    .catch(error => console.log(error));
  }

  validarFormulario(event: Event) {
    event.preventDefault();
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const cedu = (<HTMLInputElement>document.getElementById('cedu')).value;
    const correo = (<HTMLInputElement>document.getElementById('correo')).value;
    const celular = (<HTMLInputElement>document.getElementById('celular'))
      .value;
    const phonerepre = (<HTMLInputElement>document.getElementById('phonerepre'))
      .value;
    const dire = (<HTMLInputElement>document.getElementById('dire')).value;
    const tipoDiscapacidad = (<HTMLSelectElement>(
      document.getElementById('text1')
    )).value;
    const gradoDependencia = (<HTMLSelectElement>(
      document.getElementById('text2')
    )).value;
    const genero = document.querySelector('input[name="gender"]:checked');
    const password = (<HTMLInputElement>document.getElementById('contraseña'))
      .value;
    const repPassword = (<HTMLInputElement>document.getElementById('repcontra'))
      .value;
    const terminos = (<HTMLInputElement>(
      document.getElementById('terminosycondiciones')
    )).checked;

    const nameError = document.querySelector('.name .warnings')!;
    const ceduError = document.querySelector('.cedu .warnings')!;
    const correoError = document.querySelector('.correo .warnings')!;
    const celularError = document.querySelector('.celular .warnings')!;
    const phonerepreError = document.querySelector('.phonerepre .warnings')!;
    const direError = document.querySelector('.dire .warnings')!;
    const tipoDiscapacidadError = document.querySelector('.text1 .warnings')!;
    const gradoDependenciaError = document.querySelector('.text2 .warnings')!;
    const generoError = document.querySelector('.tipgenero .warnings')!;
    const passwordError = document.querySelector('.pass .warnings')!;
    const repPasswordError = document.querySelector('.contra .warnings')!;
    const terminosError = document.querySelector(
      '.terminosycondiciones .warnings'
    )!;

    // Validar el nombre
    if (!name) {
      nameError.innerHTML = '*Nombres no válidos';
    } else {
      nameError.innerHTML = '';
    }

    // Validar la cédula
    if (!cedu) {
      ceduError.innerHTML = '*Cedula no válida';
    } else {
      ceduError.innerHTML = '';
    }

    // Validar el correo electrónico
    if (!correo) {
      correoError.innerHTML = '*Correo no válido';
    } else if (!this.validarEmail(correo)) {
      correoError.innerHTML = '*Correo no válido';
    } else {
      correoError.innerHTML = '';
    }

    // Validar el celular
    if (!celular) {
      celularError.innerHTML = '*Celular no válido';
    } else {
      celularError.innerHTML = '';
    }

    // Validar el celular del representante
    if (!phonerepre) {
      phonerepreError.innerHTML =
        '*Celular no válido';
    } else {
      phonerepreError.innerHTML = '';
    }

    // Validar la dirección
    if (!dire) {
      direError.innerHTML = '*Direccion no válida';
    } else {
      direError.innerHTML = '';
    }

    // Validar el tipo de discapacidad
    if (tipoDiscapacidad === '0') {
      tipoDiscapacidadError.innerHTML =
        '*Seleccione un tipo';
    } else {
      tipoDiscapacidadError.innerHTML = '';
    }

    // Validar el grado de dependencia
    if (gradoDependencia === '0') {
      gradoDependenciaError.innerHTML =
        '*Seleccione un grado';
    } else {
      gradoDependenciaError.innerHTML = '';
    }

    // Validar el género
    if (!genero) {
      generoError.innerHTML = '*Seleccione un género';
    } else {
      generoError.innerHTML = '';
    }

    // Validar la contraseña
    if (!password) {
      passwordError.innerHTML = '*Contraseña no válida';
    } else if (!this.validarPassword(password)){
      passwordError.innerHTML = '*Minimo 6 caracteres'
    } else{
      passwordError.innerHTML = '';
    }

    // Validar la repetición de contraseña
    if (!repPassword) {
      repPasswordError.innerHTML = '*Repita la contraseña';
    } else if (password !== repPassword) {
      repPasswordError.innerHTML = '*Las contraseñas no coinciden';
    } else {
      repPasswordError.innerHTML = '';
    }

    // Validar los términos y condiciones
    if (!terminos) {
      terminosError.innerHTML = '*Acepte';
    } else {
      terminosError.innerHTML = '';
    }

    if (
      name &&
      cedu &&
      correo &&
      celular &&
      phonerepre &&
      dire &&
      tipoDiscapacidad &&
      gradoDependencia &&
      genero &&
      password &&
      repPassword &&
      terminos &&
      this.validarEmail(correo)
    ) {
      alert("Registro Exitoso");
      this.router.navigateByUrl('/index');
    }
  }

  validarEmail(email: string): boolean {
    // Expresión regular para validar el formato de un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  validarPassword(password: string): boolean {
    // Expresión regular para validar la contraseña
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    return passwordRegex.test(password);
  }
}