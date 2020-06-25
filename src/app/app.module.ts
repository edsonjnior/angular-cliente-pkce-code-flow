import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormsModule } from "@angular/forms";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
