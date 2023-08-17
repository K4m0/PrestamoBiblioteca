import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./Modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'prestamo',
    loadChildren: () =>
      import('./Modules/prestamo/prestamo.module').then(
        (m) => m.PrestamoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
