import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vuelos } from 'src/app/models/vuelos';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-updatevuelos',
  templateUrl: './updatevuelos.component.html',
  styleUrls: ['./updatevuelos.component.css']
})

export class UpdatevuelosComponent implements OnInit {

  form!: FormGroup;
  dropAerolinea!: drop[];
  dropCity!: drop[];

  lista: any[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private vuelosApi: VuelosService,
    private toastr: ToastrService,
    private activated: ActivatedRoute,
    private router:Router) {

    this.dropAerolinea = [
      new drop('1','Avianca'),
      new drop('2','Vivaair'),
      new drop('3','Latam'),
      new drop('4','Wingo'),
    ];
    this.dropCity = [
      new drop('1','Bogotá'),
      new drop('2','Medellín'),
      new drop('3','Cali'),
      new drop('4','Villavicencio'),
      new drop('5','Barranquilla'),
      new drop('6','Santa Marta'),
      new drop('7','Cartagena'),
      new drop('8','Pasto'),
      new drop('9','San Andres Isla'),
    ];


    this.form = this.formBuilder.group({
      Cod_Vuelo: ['', [Validators.required]],
      Id_Aerolinea: ['', [Validators.required]],
      Ciudad_Origen: ['', [Validators.required]],
      Ciudad_Destino: ['', [Validators.required]],
      Fecha: ['',[Validators.required]],
      Hora_Salida: ['',[Validators.required]],
      Hora_Llegada: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.detailsVuelo();
  }

  detailsVuelo(){
    const id = this.activated.snapshot.params.id;

    this.vuelosApi.getVuelosID(id).subscribe(data => {
      this.lista = data
      console.log(Object.values(this.lista))

      this.form.get('Cod_Vuelo')?.setValue(Object.values(this.lista)[1]);
      this.form.get('Id_Aerolinea')?.setValue(Object.values(this.lista)[2]);
      this.form.get('Ciudad_Origen')?.setValue(Object.values(this.lista)[3]);
      this.form.get('Ciudad_Destino')?.setValue(Object.values(this.lista)[4]);
      this.form.get('Fecha')?.setValue('ddd');
      this.form.get('Hora_Salida')?.setValue(Object.values(this.lista)[6]);
      this.form.get('Hora_Llegada')?.setValue(Object.values(this.lista)[7]);
    })
  }

  putVuelo(){
    const id = this.activated.snapshot.params.id;

    let hoy = new Date();
    let fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    let fechaYHora = fecha + ' ' + hora;

    const t : Vuelos = {
      Id_Vuelo: Number.parseInt(id),
      Cod_Vuelo: this.form.get('Cod_Vuelo')?.value,
      Id_Aerolinea: parseInt(this.form.get('Id_Aerolinea')?.value),
      Ciudad_Origen: parseInt(this.form.get('Ciudad_Origen')?.value),
      Ciudad_Destino: parseInt(this.form.get('Ciudad_Destino')?.value),
      Fecha: this.form.get('Fecha')?.value,
      Hora_Salida: this.form.get('Hora_Salida')?.value + ':00',
      Hora_Llegada: this.form.get('Hora_Llegada')?.value + ':00',
      Fecha_Creacion: fechaYHora,
      Id_Estado: 1
    }
    console.log(t)
    if(!this.form.status.includes('INVALID')) {
      this.vuelosApi.putVuelos(id,t).subscribe(data => {
        this.toastr.success('Actualización de destino exitosa.');
        this.form.reset();
        this.router.navigate(['/administrador']);
      }), (error: any) => {
        this.toastr.error('¡Los datos del vuelo no se registraron correctamente!');
        console.log(error);
      }
    }
    else {
      console.log(false)
      this.toastr.warning('Por favor completar todos los campos.');
    }
  }

}

export class drop {
   public id: string;
   public name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
