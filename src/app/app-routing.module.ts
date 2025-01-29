import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{  
  path:'', pathMatch:'full',redirectTo:'/landing'
},
{ 
  path:'landing', component: LandingComponent
},
{ 
  path:'login', component: LoginComponent
},
{ 
  path:'pages', component: AdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
