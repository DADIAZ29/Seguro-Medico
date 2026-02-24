export interface Usuario {
  id?: string;
  nombre: string;
  apellidos: string;
  email: string;
  celular: string;
  password: string;
  rol: 'ADMIN' | 'EMPLEADO';
}
