import { Component } from '@angular/core';
import { ServiciosMedicosService } from '../../servicios/servicios-medicos.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-autorizaciones',
  imports: [ CommonModule],
  templateUrl: './autorizaciones.component.html',
  styleUrl: './autorizaciones.component.css'
})
export class AutorizacionesComponent {
constructor(private autorizacion:ServiciosMedicosService){}
ngOnInit(){
  
  this.autorizacion.getAutorizaciones().subscribe({
    next: (auth)=>{
        this.auto = auth.filter((item:any )=> item.id_afiliado.id_afiliado == 22) 
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
auto:any[]=[]

}
