import { Component } from '@angular/core';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Afiliado } from '../models/afiliado.model';

@Injectable({ 
  providedIn: 'root'
})


export class AfiliadosComponent {
  private apiUrl = 'http://localhost:8080/afiliados';


  constructor(private http: HttpClient, private authService: AuthService) { }

  cargarAfiliados(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.apiUrl}/all`);
  }

  getAfiliadoByNombre(nombre: string): Observable<Afiliado> {
    return this.http.get<Afiliado>(`${this.apiUrl}/nombre?nombre=${nombre}`);
  }

  getAfiliadosByCategoria(categoria: string): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.apiUrl}/categoria?categoria=${categoria}`);
  }

  getAfiliadosByIPS(ipsId: number): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.apiUrl}/ips_id?ips_id=${ipsId}`);
  }

  saveAfiliado(afiliado: Afiliado): Observable<Afiliado> {
    return this.http.post<Afiliado>(`${this.apiUrl}/save`, afiliado);
  }

  deleteAfiliado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  updateAfiliado(id: number, updatedAfiliado: Afiliado): Observable<Afiliado> {
    return this.http.put<Afiliado>(`${this.apiUrl}/update/${id}`, updatedAfiliado);
  }

}

