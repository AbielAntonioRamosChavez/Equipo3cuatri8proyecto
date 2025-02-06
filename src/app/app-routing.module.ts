import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from '../app/register/register.component';
<<<<<<< HEAD
import { LecheComponent } from './leche/leche.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HorarioComponent } from './horario/horario.component';
=======
import { EmpleadoComponent } from './empleado/empleado.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PedidosConsultComponent } from './pedidos-consult/pedidos-consult.component';
>>>>>>> 60430b37204ecbef69654d36f02d3da8c032ecc5

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'pages',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: 'register', component: RegisterComponent },
  { path: 'leche', component: LecheComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'horario', component: HorarioComponent},
=======
  { path: 'pages', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'pedidos-consult', component: PedidosConsultComponent } 
>>>>>>> 60430b37204ecbef69654d36f02d3da8c032ecc5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

