import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../servicios/auth.service';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [MatIconModule, FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService : AuthService, private router:Router){}

 cedula : string = ''
 contrasena : string = ''

 onLogin():void{
    this.authService.login(this.cedula, this.contrasena).subscribe({
      next: (auth)=>{
        if(auth){
          if(auth.message === "Login exitoso"){
              this.router.navigate(['/home'])
          }
        }else{
          console.log("error al verificar cedula y contraseña")
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
 }  
}
