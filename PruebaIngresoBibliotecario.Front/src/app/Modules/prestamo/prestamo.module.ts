import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoComponent } from './prestamo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';

const routes: Routes = [
  { path: '', component: PrestamoComponent },
  {
    path: 'createPrestamo',
    loadChildren: () =>
      import('./components/create-prestamo/create-prestamo.module').then(
        (c) => c.CreatePrestamoModule
      ),
  },
];

@NgModule({
  declarations: [PrestamoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    PrestamoFormComponent,
  ],
})
export class PrestamoModule {}
