import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'labs';

  items: any[] = [];

  constructor() {
    this.agregarItem();
  }

  agregarItem() {
    this.items.push({
      Nombre: '',
      Presentacion: '',
      Cantidad: '',
      Posologia: '',
      Duracion: ''
    });
  }

  eliminarItem(index: number) {
    this.items.splice(index, 1);
  }

  guardarDatos() {
    // Aquí puedes enviar los datos al backend o realizar cualquier acción necesaria
    console.log(this.items);
  }
}


// agregarItem() {
  //   this.items.push({
  //     Nombre: '',
  //     Presentacion: '',
  //     Cantidad: '',
  //     Posologia: '',
  //     Duracion: ''
  //   });
  // }

  // eliminarItem(index: number) {
  //   if (this.items.length > 1) {
  //     this.items.splice(index, 1);
  //   } else {
  //     alert('Debe haber al menos un elemento.');
  //   }
  // }

  // guardarDatos() {
  //   // Aquí puedes enviar los datos al backend o realizar cualquier acción necesaria
  //   console.log(this.items);
  // }
