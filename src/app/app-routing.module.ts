import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from '../app/register/register.component';
import { LecheComponent } from './leche/leche.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HorarioComponent } from './horario/horario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pages',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: 'register', component: RegisterComponent },
  { path: 'leche', component: LecheComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'horario', component: HorarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

