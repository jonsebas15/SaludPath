import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiciosMedicosService } from '../../../servicios/servicios-medicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-citas',
  imports: [FormsModule],
  templateUrl: './crear-citas.component.html',
  styleUrl: './crear-citas.component.css'
})
export class CrearCitasComponent {
  constructor(private citas:ServiciosMedicosService, private router:Router){}
  ngOnInit(){
    this.nombre = localStorage.getItem('nombre')
    this.id = localStorage.getItem('id')
  }

  nombre:any
  id:any
  fecha:any
  especialidad:any


  crearCita():void{
    this.citas.crearCita(this.id, this.fecha, this.especialidad).subscribe({
      next:(auth)=>{
        this.router.navigate(['/servicios/citas'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
