import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePrestamoComponent } from './create-prestamo.component';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoFormComponent } from '../prestamo-form/prestamo-form.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: CreatePrestamoComponent,
  },
];

@NgModule({
  declarations: [CreatePrestamoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrestamoFormComponent,
    MatButtonModule,
  ],
})
export class CreatePrestamoModule {}
