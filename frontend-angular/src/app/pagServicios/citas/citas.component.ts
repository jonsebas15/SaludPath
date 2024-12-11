import { Component } from '@angular/core';
import { ServiciosMedicosService } from '../../servicios/servicios-medicos.service';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  imports: [CommonModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {

  constructor(private citas:ServiciosMedicosService, private router:Router){}


  ngOnInit(){
  
    this.citas.getCitas().subscribe({
      next: (auth)=>{
          this.cita = auth.filter((item:any )=> item.id_afiliado.id_afiliado == 22) 
      },
      error:(err)=>{
        console.log(err)
      }
    })
}
  cita:any[]=[]

  cancelar(index: number) {
    console.log(this.cita[index].id_cita)
    this.citas.eliminarCita(this.cita[index].id_cita).subscribe(
      (response) => {

        window.location.reload();
        console.log('Elemento eliminado con éxito', response);
      },)
  }
}
