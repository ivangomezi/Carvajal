import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {
  lista: any[] = []

  constructor(public api: VuelosService) {
    this.api.getVuelos().subscribe(data => {
      this.lista = data

      console.log(this.lista)
    })

   }

  ngOnInit(): void {
  }

}
