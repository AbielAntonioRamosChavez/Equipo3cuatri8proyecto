import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Usa CommonModule en lugar de AppModule
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from '../app-routing.module'; // Si necesitas rutas
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AdminComponent // Declara los componentes que pertenecen a este módulo
  ],
  imports: [
    CommonModule, // Usa CommonModule para las directivas básicas
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega si usas Web Components personalizados
})
export class AdminModule {}

