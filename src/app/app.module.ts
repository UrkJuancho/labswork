import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { SwitchPrevenComponent } from './switch-preven/switch-preven.component';
import { DropdownMenuItemComponent } from './dropdown-menu-item/dropdown-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    SwitchPrevenComponent,
    DropdownMenuItemComponent
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
