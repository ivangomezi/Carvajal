import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { AddvuelosComponent } from './components/addvuelos/addvuelos.component';
import { ListvuelosComponent } from './components/listvuelos/listvuelos.component';
import { DeletevuelosComponent } from './components/deletevuelos/deletevuelos.component';
import { UpdatevuelosComponent } from './components/updatevuelos/updatevuelos.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VuelosComponent,
    AddvuelosComponent,
    ListvuelosComponent,
    DeletevuelosComponent,
    UpdatevuelosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
