import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../servicio.service'; 

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

 /* comentarios: any [] = [{
    nombre: "Julian Ocampo",
    alias:"@julios",
    comentario:"Framewor Angular sigue evolucionando"

  },
  {
    nombre:"Sara Ospina",
    alias:"@Sara",
    comentario:"BUENOS FRAMEWORKS"
    
  }]; */

  comentarios: any;
  
  nombre: any;
  comentario: any;
  
  constructor(private _comentario: ComentarioService){ }

    ngOnInit(): void{ //Este es un metodo que se llama de primero cuando se carga un componente
      this.obtenerComentarios();
   }
   agregarComentario() {
    console.log(this.nombre);
    console.log(this.comentario);

    let comentarioAux = {
      nombre: this.nombre,
     // alias: `@ ${ this.nombre }`,
      comentario: this.comentario
    }
    this._comentario.guardar(comentarioAux)
    .subscribe( data =>{
      console.log("comentario guardado");
      this.obtenerComentarios();
    })
   }

   eliminar(indice:any){  //Eliminar un comentario desde un componente
      this._comentario.eliminar(indice)
      .subscribe( data =>{
        console.log("Comentario eliminado")
        this.obtenerComentarios();
      })

   }

   obtenerComentarios(){
    this._comentario.obtener()
    .subscribe(data =>{
      this.comentarios = data;
      console.log(this.comentarios);
    })
  }

}
