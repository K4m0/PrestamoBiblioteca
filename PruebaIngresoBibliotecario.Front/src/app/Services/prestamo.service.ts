import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Prestamo } from '../Models/prestamo';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  private prestamosSubject: BehaviorSubject<Prestamo[]> = new BehaviorSubject(
    [] as Prestamo[]
  );
  constructor(private http: HttpClient) {}

  URL: string = 'https://localhost:44382/api/Prestamo/';

  getPrestamoById(idPrestamo: string): Observable<Prestamo> {
    let query = `${this.URL}${idPrestamo}`;
    return this.http.get<Prestamo>(query).pipe(
      tap((response: any) => {
        console.log(response);
      })
    );
  }

  getAllPrestamos(): Observable<Prestamo[]> {
    return this.prestamosSubject.asObservable();
  }

  refreshPrestamosData(): Observable<void> {
    let query = `${this.URL}`;
    return this.http.get(query).pipe(
      tap((response: any) => {
        // notify all subscribers of new data
        this.prestamosSubject.next(response);
      })
    );
  }

  createPrestamo(prestamo: Prestamo) {
    let query = `${this.URL}`;
    return this.http.post(query, prestamo);
  }
}
