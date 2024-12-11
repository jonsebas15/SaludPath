import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';


interface CedulaReponse{
  id_afiliado:string,
  nombre:string,
  numero_identificacion:string
}

interface LoginResponse {
  message?: string;
  cedula: CedulaReponse
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = 'http://localhost:9090/login/verificar';

  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<LoginResponse> {
    const credentials = { cedula:{numero_identificacion:username}, contrasena:password };
    console.log(credentials)
    return this.http.post<LoginResponse>(this.loginUrl, credentials).pipe(
      tap(response => {
        localStorage.setItem('id', response.cedula.id_afiliado);
        localStorage.setItem('nombre', response.cedula.nombre);
        return response
      }) 
    );
  }
}
