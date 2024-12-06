import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SaludAngular';

  constructor(){
    this.Animacion(5000)
    
  }

  ngOnInit() {
    const video = document.querySelector('.video-banner') as HTMLVideoElement;
    if (video) {
        video.muted = true;
    }
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
