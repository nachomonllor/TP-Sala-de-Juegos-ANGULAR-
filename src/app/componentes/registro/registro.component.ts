import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from './../../servicios/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /* constructor( private miConstructor:FormBuilder) { }
   email=new FormControl('',[Validators.email]);
   formRegistro:FormGroup=this.miConstructor.group({
     usuario:this.email
   });*/

  form: FormGroup;
  user: User;
  constructor(
    private router: Router,
    public _userService: UserService
  ) {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      clave: new FormControl(null, Validators.required),
      cuit: new FormControl(null, Validators.required),
      sexo: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  registraUsuario() {
    const user: User = {
      username: this.form.get('username').value,
      nombre: this.form.get('nombre').value,
      clave: this.form.get('clave').value,
      cuit: this.form.get('cuit').value,
      sexo: this.form.get('sexo').value
    };
    this._userService.addUser(user);
    Swal.fire({
      title: 'Atención',
      text: 'El usuario ha sido registrado :)',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
      animation: false,
    });
    this.router.navigate(['/Login']);
  }
}
