import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl: string = 'http://localhost:8080/auth';
  
  constructor(private http: HttpClient) { }

  register(user:any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${this.apiUrl}/register`, user, { observe: 'response'});
  }


  login(user:any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post(`${this.apiUrl}/login`, user, {headers, observe: 'response'})
  }


}
