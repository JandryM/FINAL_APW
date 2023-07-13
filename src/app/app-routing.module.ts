import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociadosComponent } from './asociados/asociados.component';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
// import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'inicio'},
  { path: 'inicio', component: InicioComponent},
  { path: 'index', component: IndexComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'asociados', component: AsociadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
