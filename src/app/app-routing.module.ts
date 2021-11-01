import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvuelosComponent } from './components/addvuelos/addvuelos.component';
import { HomeComponent } from './components/home/home.component';
import { ListvuelosComponent } from './components/listvuelos/listvuelos.component';
import { UpdatevuelosComponent } from './components/updatevuelos/updatevuelos.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'search/vuelos', component: VuelosComponent },
  { path: 'administrador/add', component: AddvuelosComponent },
  { path: 'administrador/update/:id', component: UpdatevuelosComponent },
  { path: 'administrador', component: ListvuelosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
