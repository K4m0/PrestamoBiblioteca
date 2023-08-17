import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoComponent } from './prestamo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { PrestamoDetailsModule } from './components/prestamo-details/prestamo-details.module';

const routes: Routes = [
  { path: '', component: PrestamoComponent },
  {
    path: 'createPrestamo',
    loadChildren: () =>
      import('./components/create-prestamo/create-prestamo.module').then(
        (m) => m.CreatePrestamoModule
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
    PrestamoDetailsModule,
  ],
})
export class PrestamoModule {}
