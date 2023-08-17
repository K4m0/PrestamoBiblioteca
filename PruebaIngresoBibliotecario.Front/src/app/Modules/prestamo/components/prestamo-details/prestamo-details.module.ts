import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoDetailsComponent } from './prestamo-details.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PrestamoFormComponent } from '../prestamo-form/prestamo-form.component';

// const routes: Routes = [
//   { path: 'prestamoDetails', component: PrestamoDetailsComponent },
// ];

@NgModule({
  declarations: [PrestamoDetailsComponent],
  imports: [
    CommonModule,
    //RouterModule.forChild(routes),
    PrestamoFormComponent,
    MatButtonModule,
  ],
  exports: [PrestamoDetailsComponent],
})
export class PrestamoDetailsModule {}
