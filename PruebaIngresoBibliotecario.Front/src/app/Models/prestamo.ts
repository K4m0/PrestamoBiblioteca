import { TipoUsuarioPrestamo } from './tipoUsuario';

export interface Prestamo {
  id?: string;
  isbn: string;
  identificacionUsuario: string;
  tipoUsuario: TipoUsuarioPrestamo;
  fechaMaximaDevolucion?: string;
}
