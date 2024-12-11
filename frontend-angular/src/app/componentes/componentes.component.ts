import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../sidenav/menu/menu.component';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './componentes.component.html',
  styles: ``
})
export class ComponentesComponent {

}
