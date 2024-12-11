import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPS } from '../models/ips.model';

@Injectable({
  providedIn: 'root'
})
export class IpsService {
  private baseUrl = 'http://localhost:8080/ips';

  constructor(private http: HttpClient) { }

  // Obtener todas las IPS
  getIps(): Observable<IPS[]> {
    return this.http.get<IPS[]>(`${this.baseUrl}/ips`);
  }

  // Buscar IPS por ID
  getIpsById(id: number): Observable<IPS> {
    return this.http.get<IPS>(`${this.baseUrl}/ips/${id}`);
  }

  // Crear nueva IPS
  createIps(ips: IPS): Observable<IPS> {
    return this.http.post<IPS>(`${this.baseUrl}/ips`, ips);
  }

  // Actualizar IPS
  updateIps(ips: IPS): Observable<IPS> {
    return this.http.put<IPS>(`${this.baseUrl}/ips`, ips);
  }

  // Eliminar IPS
  deleteIps(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/ips/${id}`);
  }
}
