import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router:Router){

  }
  @ViewChild('nav1', { static: true }) nav1!: ElementRef;
  nombre:any

  ngOnInit(){
    gsap.from(this.nav1.nativeElement.children,{
      duration:1,
      delay:.5,
      opacity:0,
      y:50,
      stagger:{
        amount:.4,
      }
    })
    this.nombre = localStorage.getItem('nombre');
  }

 salir(){
  localStorage.removeItem('id');
  localStorage.removeItem('nombre');
  this.router.navigate(['/login'])
 }
}
