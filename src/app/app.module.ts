import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { LecheComponent } from './leche/leche.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HorarioComponent } from './horario/horario.component';
import { HeadarmeniComponent } from './admin/template/headarmeni/headarmeni.component';
import { SidemenuComponent } from './admin/template/sidemenu/sidemenu.component';
import { BreadscrumnbComponent } from './admin/template/breadscrumnb/breadscrumnb.component';
import { FouderComponent } from './admin/template/fouder/fouder.component';
=======
import { EmpleadoComponent } from './empleado/empleado.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PedidosConsultComponent } from './pedidos-consult/pedidos-consult.component';
>>>>>>> 60430b37204ecbef69654d36f02d3da8c032ecc5

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    LecheComponent,
    CarritoComponent,
    HorarioComponent,
    HeadarmeniComponent,
    SidemenuComponent,
    BreadscrumnbComponent,
    FouderComponent
=======
    EmpleadoComponent,
    NotificacionesComponent,
    PedidosConsultComponent
>>>>>>> 60430b37204ecbef69654d36f02d3da8c032ecc5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FouderComponent,
    HeadarmeniComponent,
    SidemenuComponent,
    BreadscrumnbComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
