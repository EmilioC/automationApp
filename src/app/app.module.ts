import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialesComponent } from './components/materiales/materiales.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MaterialComponent,
    MaterialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
