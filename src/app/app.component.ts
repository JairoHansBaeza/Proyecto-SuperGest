import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'super-gest';
  constructor(private fb: FormBuilder){}

  loginForm = new FormGroup({
    usuario: new FormControl('pija',Validators.required),
    contraseña: new FormControl('paja',Validators.required),
  })

  ngOnInit(){

  }
  get usuario(){
    return this.loginForm.get('usuario');
  }
}
