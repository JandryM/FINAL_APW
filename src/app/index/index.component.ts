import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})

export class IndexComponent implements OnInit{
  
  formLogin: FormGroup;

  constructor(
    private userService : UserService,
    private router: Router
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }
  onClick(){
    this.userService.loginGoogle()
    .then(response =>{
      console.log(response);
      this.router.navigate(['inicio']);
    })
    .catch(error => console.log(error))
  }


  onSubmit(){

    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        alert("Ingreso Exitoso")
        this.router.navigateByUrl('/inicio');
      })
      .catch(error => {
        console.log(error);
        alert("Ocurrió un error durante el inicio de sesión. Por favor, verifica tus credenciales e intenta nuevamente.");
      });  
  }

  validarFormulario(event: Event) {
    event.preventDefault(); // Detener la recarga de la página

    const email = (<HTMLInputElement>document.getElementById('user')).value;
    const password = (<HTMLInputElement>document.getElementById('passw')).value;
    const emailError = document.querySelector('.correo .warnings')!;
    const passwordError = document.querySelector('.pass .warnings')!;
    

    // Validar el email
    if (!email) {
      emailError.innerHTML = 'El campo de correo electrónico es requerido';
    } else if (!this.validarEmail(email)) {
      emailError.innerHTML = 'El correo electrónico ingresado no es válido';
    } else {
      emailError.innerHTML = '';
    }

    // Validar la contraseña
    if (!password) {
      passwordError.innerHTML = '*Contraseña no válida';
    } else if (!this.validarPassword(password)){
      passwordError.innerHTML = '*Contraseña no válida'
    } else{
      passwordError.innerHTML = '';
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