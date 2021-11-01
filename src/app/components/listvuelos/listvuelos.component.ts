import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vuelos } from 'src/app/models/vuelos';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-listvuelos',
  templateUrl: './listvuelos.component.html',
  styleUrls: ['./listvuelos.component.css']
})
export class ListvuelosComponent implements OnInit {

  lista: any[] = []

  constructor(
    private toastr: ToastrService,
    public api: VuelosService,
    private router:Router) {

      this.api.getVuelos().subscribe(data => {
        this.lista = data

        console.log(this.lista)
      })
    }

  ngOnInit(): void {
  }

  updateVuelos(id:any) {
    let id_ = id.target.id
    this.router.navigate(['/administrador/update/'+id_]);
  }

  deleteVuelos(id:any) {
    let id_ = id.target.id
    if(confirm("¿Seguro que desea eliminar el vuelo programado?")){
      this.api.deleteVuelos(id_).subscribe(data => {

        this.toastr.success('El vuelo seleccionado fue eliminado correctamente', 'Vuelo fue eliminado');
        
        this.api.getVuelos().subscribe(data => {
          this.lista = data
        })

      });
    }
  }
  
}
