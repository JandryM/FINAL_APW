import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent  {
  // constructor(
  //   private userService : UserService,
  //   private router : Router
  // ){ }

  //   ngOnInit(): void {
      
  //   }

  //   onClick(){
  //     this.userService.logout()
  //     .then(() =>{
  //       this.router.navigate(['index']);
  //     })
  //     .catch(error => console.log(error));
  //   }
}

document.addEventListener('DOMContentLoaded', () => {
  const openModal = document.getElementById('openModal') as HTMLElement;
  const closeModal = document.getElementById('closeModal') as HTMLElement;
  const modal = document.getElementById('modal') as HTMLElement;
  const cita = document.getElementById('cita') as HTMLFormElement;
  const nombre = document.getElementById('nombe') as HTMLInputElement;
  const dat = document.getElementById('fecha') as HTMLInputElement;
  const hour = document.getElementById('hora') as HTMLInputElement;
  const propo = document.getElementById('proposito') as HTMLTextAreaElement;
  const listcita = Array.from(
    document.querySelectorAll('.botons')
  ) as HTMLElement[];

  cita.addEventListener('submit', (e) => {
    e.preventDefault();
    let condicion = validacita();
    if (condicion) {
      alert('datos enviados');
      cita.reset();
    }

    function validacita() {
      let condicion = true;
      listcita.forEach((element) => {
        element.firstElementChild!.innerHTML = '';
      });
      if (nombre.value.length < 1 || nombre.value.trim() === '') {
        smjerror('nombe', 'Contraseña no válida*');
        condicion = false;
      }
      if (dat.value.length < 1 || dat.value.trim() === '') {
        smjerror('fecha', 'Fecha no válida*');
        condicion = false;
      }
      if (hour.value.length < 1 || hour.value.trim() === '') {
        smjerror('hora', 'Hora no válida*');
        condicion = false;
      }
      if (propo.value.length < 20 || propo.value.trim() === '') {
        smjerror('proposito', 'Debe especificar un propósito*');
        condicion = false;
      }
      return condicion;
    }
  });

  function smjerror(classbuton: string, mensaje: string) {
    let elemento = document.querySelector(`.${classbuton}`) as HTMLElement;
    elemento.firstElementChild!.innerHTML = mensaje;
  }

  openModal.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
