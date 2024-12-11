import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosMedicosService {

  constructor(private http:HttpClient) { }

  private historialUrl = 'http://localhost:9090/historiaClinica';
  private citasUrl = 'http://localhost:9090/citasmedicas';
  private autorizacionesUrl = 'http://localhost:9090/autorizacion';
  private comentar = 'http://localhost:9090/encuesta';



getHistorial(){
    return this.http.get<any>(this.historialUrl).pipe(
      map(response => response)
  );
}
getAutorizaciones(){
  return this.http.get<any>(this.autorizacionesUrl).pipe(
    map(response => response)
);
}
getCitas(){
  return this.http.get<any>(this.citasUrl).pipe(
    map(response => response)
);
}

crearCita(id_afiliado:string, fecha:string, especialidad:string, ){

  const formCita = {id_afiliado:{id_afiliado}, id_ips:{id_ips:2}, fecha_cita:fecha, hora_cita:'1970-01-01',especialidad, estado_cita:'confirmada', id:{id:5}};
  return this.http.post<any>(this.citasUrl, formCita).pipe(
    map(response => {
      console.log(response)
      return response
    }) 
  );
}


eliminarCita(id: number): Observable<any> {
  return this.http.delete(`${this.citasUrl}/${id}`);
}



getComments(): Observable<any> {
  return this.http.get<any>(this.comentar).pipe(
    map(resp => resp)
  );
}

// Enviar un comentario al backend
addComment(id_afiliado:string, comentarios:string): Observable<any> {
  const comment = {id_afiliado:{id_afiliado}, fecha_encuesta:'2024-10-16', calificacion_servicios:'4', comentarios}
  console.log(comment)
  return this.http.post<any>(this.comentar, comment);
}
}