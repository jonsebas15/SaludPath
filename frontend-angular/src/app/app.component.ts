import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('nav1', { static: true }) nav1!: ElementRef;
 

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
  }

}
