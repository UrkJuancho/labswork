import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { MedcialForm1Component } from './medcial-form1/medcial-form1.component';
import { MedcialForm2Component } from './medcial-form2/medcial-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    MedcialForm1Component,
    MedcialForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
