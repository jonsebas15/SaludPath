import { Component } from '@angular/core';
import { ServiciosMedicosService } from '../../servicios/servicios-medicos.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-historial',
  imports: [ CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

constructor(private histo:ServiciosMedicosService){

}

ngOnInit(){
    this.id = localStorage.getItem('id');
    this.histo.getHistorial().subscribe({
      next: (auth)=>{
        console.log(this.id)
          this.historialM = auth.filter((item:any )=> item.id_afiliado.id_afiliado == this.id) 
      },
      error:(err)=>{
        console.log(err)
      }
    })
}
  historialM:any[]=[]
  id:any
}
