import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initVali: FormGroup;
  lista: any[] = [];

  constructor( 
    private router: Router,
    private fb:FormBuilder,
    private toastr: ToastrService,
    public api: UsuariosService) {

    this.initVali = this.initVali = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

   }

  ngOnInit(): void {
  }

  Init(){
    if(this.initVali.status != "INVALID"){

      const frm : any = {
        email: this.initVali.value.email,
        password: this.initVali.value.password,
        create: new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear()
      }

      this.api.getUsuarios().subscribe(data => {
        this.lista = data
        console.log(Object.values(this.lista))

        let i = 0;
        let vali = null;
        for (let a of this.lista){
          if(frm.email == Object.values(this.lista[i])[3] && frm.password == Object.values(this.lista[i])[4]){
          
            const key = btoa(frm.email + frm.password) //decode atob()
    
            this.initVali.setValue({
              email:'',
              password:''
            })
      
            this.router.navigate((['/search/vuelos']))
            this.toastr.success('¡Bienvenido!');
            vali = true;
            break;
          }
          else {
            i++
            vali = false;
          }
        }
        if(vali == false){
          this.toastr.error('Datos no coinciden con resgistros almacenados.');
        }
      })
    }
    else {
      this.toastr.warning('¡Todos los campos deben estar completos!');
    }
  }

}
