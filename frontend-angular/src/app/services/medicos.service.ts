import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Medico {
  id?: number;
  nombres: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private apiUrl = 'http://localhost:8080/medico'; // Ajusta según tu configuración

  constructor(private http: HttpClient) { }

  // Obtener todos los médicos
  getMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.apiUrl}/medico`);
  }

  // Obtener médico por ID
  getMedicoById(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.apiUrl}/medico/${id}`);
  }

  // Crear nuevo médico
  createMedico(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${this.apiUrl}/medico`, medico);
  }

  // Actualizar médico
  updateMedico(medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.apiUrl}/medico`, medico);
  }

  // Eliminar médico
  deleteMedico(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/medico/${id}`);
  }
}
