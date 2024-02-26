import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      items: this.formBuilder.array([])
    });

    // Agregar un item inicial al formulario
    this.agregarItem();
  }

  get itemsFormArray() {
    return this.formulario.get('items') as FormArray;
  }

  agregarItem() {
    const itemFormGroup = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Presentacion: ['', Validators.required],
      Cantidad: ['', Validators.required],
      Posologia: ['', Validators.required],
      Duracion: ['', Validators.required]
    });

    this.itemsFormArray.push(itemFormGroup);
  }

  eliminarItem(index: number) {
    this.itemsFormArray.removeAt(index);
  }

  guardarDatos() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Aquí puedes enviar los datos al backend o realizar cualquier acción necesaria
    }
  }

}
