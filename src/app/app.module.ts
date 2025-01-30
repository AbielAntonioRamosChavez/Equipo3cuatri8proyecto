import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/components/login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
@NgModule({
  declarations: [ 
    AppComponent,
    LandingComponent,
    AdminComponent,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginComponent,   
    RegisterComponent 
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

