import { User } from '../../models/user';
import { UserService } from './../../servicios/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  logeando = true;
  arrayOfKeys;
  arrayOfValues;
  username = '';
  clave = '';

  constructor(
    private router: Router,
    public _userService: UserService
  ) { }

  onSubmit() {
    // this.router.navigate(['/Principal']);
    const user = {
      username: this.username,
      clave: this.clave,
    };
    if (this._userService.login(user)) {
      this.router.navigate(['/Principal']);
    } else {
      Swal.fire({
        title: 'Error',
        text: ':: El usuario no existe',
        icon: 'error',
        timer: 3000
      });
    }
    // console.log(this.nombre + " " + this.clave);
    //  let flag = false;
    // for(let i =0; i < this.us.length; i++) {
    //     if(this.us[i].nombre === this.nombre && this.us[i].clave === this.clave) {
    //       this.router.navigate(['/Principal']);
    //       flag = true;
    //       break;
    //     }
    // }
    // if(flag == false) {
    //   alert("el usuario no existe, tenes que registrarte");
    // }
  }
}



/*
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import { timer } from "rxjs";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../clases/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando...";
  logeando=true;
  ProgresoDeAncho:string;
  myForm:FormGroup

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";


      this.myForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
  }

  ngOnInit() {
  }

  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/Principal']);
    }
  }

  saveData(){
    console.log(this.myForm.value);
  }

  MoverBarraDeProgreso() {

    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy...";
    let timers = timer(200, 50);
    this.subscription = timers.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN...";
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación..";
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;

        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }
    });
    //this.logeando=true;
  }

}
*/
