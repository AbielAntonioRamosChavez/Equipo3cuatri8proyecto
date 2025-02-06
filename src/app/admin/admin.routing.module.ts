import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: PrincipalComponent
      }
    ]
  }
];

@NgModule({
    declarations: [AdminComponent, PrincipalComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
