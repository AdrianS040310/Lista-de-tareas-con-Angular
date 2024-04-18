import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasJassComponent } from './components/tareas-jass/tareas-jass.component';
import { NavbarJassComponent } from './components/navbar-jass/navbar-jass.component';


@NgModule({
  declarations: [
    AppComponent,
    TareasJassComponent,
    NavbarJassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
