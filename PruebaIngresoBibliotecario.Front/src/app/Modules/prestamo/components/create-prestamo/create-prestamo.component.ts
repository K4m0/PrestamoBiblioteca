import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prestamo } from 'src/app/Models/prestamo';
import { PrestamoService } from 'src/app/Services/prestamo.service';

@Component({
  selector: 'app-create-prestamo',
  templateUrl: './create-prestamo.component.html',
  styleUrls: ['./create-prestamo.component.scss'],
})
export class CreatePrestamoComponent implements OnDestroy {
  private prestamoServiceSubscription: Subscription | undefined;
  constructor(
    private prestamoService: PrestamoService,
    private router: Router
  ) {}

  back() {
    this.router.navigate(['/prestamo']);
  }

  createPrestamo(prestamo: Prestamo) {
    console.log(prestamo);
    this.prestamoServiceSubscription = this.prestamoService
      .createPrestamo(prestamo)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/prestamo']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnDestroy(): void {
    this.prestamoServiceSubscription?.unsubscribe();
  }
}
