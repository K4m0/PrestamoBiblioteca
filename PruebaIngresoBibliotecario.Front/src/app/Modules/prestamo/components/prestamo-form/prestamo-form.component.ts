import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TipoUsuarioPrestamo } from 'src/app/Models/tipoUsuario';
import { CommonModule } from '@angular/common';
import { Prestamo } from 'src/app/Models/prestamo';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prestamo-form',
  templateUrl: './prestamo-form.component.html',
  styleUrls: ['./prestamo-form.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class PrestamoFormComponent {
  @Input() prestamoDetail: Prestamo = {
    isbn: '',
    identificacionUsuario: '',
    tipoUsuario: TipoUsuarioPrestamo.AFILIADO,
  };

  @Output() onCreatePrestamo = new EventEmitter<Prestamo>();

  availableOptions = [
    TipoUsuarioPrestamo.AFILIADO,
    TipoUsuarioPrestamo.EMPLEADO,
    TipoUsuarioPrestamo.INVITADO,
  ];
  selectedTipoUsuario = this.prestamoDetail.tipoUsuario;
  isbn: string = this.prestamoDetail.isbn;
  identificacionUsuario: string = this.prestamoDetail.identificacionUsuario;

  getOptionLabel(option: TipoUsuarioPrestamo) {
    switch (option) {
      case TipoUsuarioPrestamo.AFILIADO:
        return 'Afiliado';
      case TipoUsuarioPrestamo.EMPLEADO:
        return 'Empleado';
      case TipoUsuarioPrestamo.INVITADO:
        return 'Invitado';
      default:
        throw new Error('Unsupported option');
    }
  }

  createPrestamo() {
    this.onCreatePrestamo.emit({
      isbn: this.isbn,
      identificacionUsuario: this.identificacionUsuario,
      tipoUsuario: this.selectedTipoUsuario,
    });
  }
}
