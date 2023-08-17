import {
  AfterViewInit,
  Component,
  ViewChild,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Prestamo } from 'src/app/Models/prestamo';
import { PrestamoService } from '../../Services/prestamo.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.scss'],
})
export class PrestamoComponent implements AfterViewInit, OnInit, OnDestroy {
  private prestamoServiceSubscription: Subscription | undefined;

  constructor(
    private prestamoService: PrestamoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prestamoService.refreshPrestamosData().subscribe(() => {});

    this.prestamoServiceSubscription = this.prestamoService
      .getAllPrestamos()
      .subscribe((currentPrestamos) => {
        this.dataSource.data = currentPrestamos;
        console.log(currentPrestamos);
      });
  }

  displayedColumns: string[] = [
    'isbn',
    'identificacionUsuario',
    'tipoUsuario',
    'fechaMaximaDevolucion',
  ];

  dataSource = new MatTableDataSource<Prestamo>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.prestamoServiceSubscription?.unsubscribe();
  }

  createPrestamo() {
    this.router.navigate(['/createPrestamo']);
  }
}
