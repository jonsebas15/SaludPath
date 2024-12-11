import { Component } from '@angular/core';
import { ServiciosMedicosService } from '../servicios/servicios-medicos.service';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pag-encuestas',
  imports: [CommonModule,FormsModule],
  templateUrl: './pag-encuestas.component.html',
  styleUrl: './pag-encuestas.component.css'
})
export class PagEncuestasComponent {

  comments:any[] = [];
  newComment: string = '';

  constructor(private commentService: ServiciosMedicosService) { }
  id:any
  ngOnInit(): void {
    // Cargar los comentarios al iniciar el componente
    this.loadComments();
    this.id = localStorage.getItem('id')
  }

  loadComments(): void {
    this.commentService.getComments().subscribe({
      next:(data)=>{
        this.comments = data;
      },
      error:(data)=>{
        console.error('Error al cargar comentarios', data);
      }

    }
    );
  }

  addComment(): void {
    if (this.newComment.trim() === '') {
      return;
    }


    this.commentService.addComment(this.id, this.newComment).subscribe(
      (data) => {
        // Agregar el nuevo comentario a la lista de comentarios
        this.comments = data;
        this.newComment = '';  // Limpiar el campo de texto
        window.location.reload();
      },
      (error) => {
        console.error('Error al agregar el comentario', error);
      }
    );
  }
}
