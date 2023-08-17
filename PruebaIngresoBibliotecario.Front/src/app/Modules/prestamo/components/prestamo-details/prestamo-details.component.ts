import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prestamo } from 'src/app/Models/prestamo';
import { TipoUsuarioPrestamo } from 'src/app/Models/tipoUsuario';
import { PrestamoService } from 'src/app/Services/prestamo.service';

@Component({
  selector: 'app-prestamo-details',
  templateUrl: './prestamo-details.component.html',
  styleUrls: ['./prestamo-details.component.scss'],
})
export class PrestamoDetailsComponent implements OnInit, OnDestroy {
  @Input() idPrestamo: string = '';

  private prestamoServiceSubscription: Subscription | undefined;

  prestamoDetail: Prestamo = {
    isbn: '',
    identificacionUsuario: '',
    tipoUsuario: TipoUsuarioPrestamo.AFILIADO,
  };

  constructor(private prestamoService: PrestamoService) {
    console.log(this.idPrestamo);
  }
  ngOnInit(): void {
    this.prestamoService
      .getPrestamoById(this.idPrestamo)
      .subscribe((prestamo) => {
        this.prestamoDetail = prestamo;
      });
  }

  ngOnDestroy(): void {
    this.prestamoServiceSubscription?.unsubscribe();
  }
}
