import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterModule ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   @ViewChild('titulo', { static: true }) titulo!: ElementRef;
   @ViewChild('video', { static: true }) video!: ElementRef;
   @ViewChild('static', { static: true }) static!: ElementRef;
   @ViewChild('menuCuadros', { static: true }) menuCuadros!: ElementRef;
   @ViewChild('otros', { static: true }) otros!: ElementRef;

  constructor(){
    gsap.registerPlugin(ScrollTrigger);
    this.Animacion(5000)
    console.log('ScrollTrigger registrado correctamente');

  }

  ngOnInit() {
    const video = document.querySelector('.video-banner') as HTMLVideoElement;
    if (video) {
        video.muted = true;
    }


    gsap.from(this.titulo.nativeElement, {
      duration:1,
      x:200,
      skewX:-65,
      opacity:0,
      delay:1,
    })

    gsap.from(this.video.nativeElement, {
      opacity:0,
      delay:1.5,
      duration:1,
    })

    gsap.from(this.static.nativeElement.children, {
      autoAlpha:0,
      delay:2,
      stagger:
        .1
    })
        

  }


  ngAfterViewInit() {

    gsap.fromTo(
      this.menuCuadros.nativeElement.children,
      { opacity: 0, y: 100 }, 
      {
        opacity: 1, 
        y: 0, 
        stagger: 0.4, 
        duration: 1, 
        scrollTrigger: {
          trigger: this.menuCuadros.nativeElement, 
          start: 'top 25%', 
          end: '50px', 
          scrub: true, 
          pin:true,



        },
      });
  }

 numUsuarios = 0
 numClinicas = 0
 numDoctores = 0

 Animacion = (duration:number) =>{
    let startTimes:any = null
    const step = (timestamp:any)=>{
      if(!startTimes){
        startTimes = timestamp
      }
      let prograss = Math.min((timestamp - startTimes)/duration, 1)
      this.numUsuarios = Math.floor(prograss * (1024));

      let prograss2 = Math.min((timestamp - startTimes)/duration, 1)
      this.numClinicas = Math.floor(prograss2 * (21));

      let prograss3 = Math.min((timestamp - startTimes)/duration, 1)
      this.numDoctores = Math.floor(prograss3 * (206));

      if(prograss < 1){
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
 }
}
