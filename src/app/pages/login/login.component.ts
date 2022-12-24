import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validacionLogin:boolean = false;

  constructor(private fb: FormBuilder, 
    private empService: EmployeesService,
    private router: Router){}
    
  loginForm = new FormGroup({
    usuario: new FormControl('jairo19',Validators.required),
    contraseña: new FormControl('',Validators.required),
  })
 
  ngOnInit(): void {
  }
  get usuario(){
    return this.loginForm.get('usuario');
  }
  get contraseña(){
    return this.loginForm.get('contraseña');  
  }

  validarLogin(){
    if(this.usuario?.value && this.contraseña?.value){
      this.empService.login(this.usuario.value,this.contraseña.value).subscribe((resp:any)=>{
        console.log(resp.access)
        if (resp.access){
          this.router.navigate(['home']);
          return;
        }
        else
          this.validacionLogin = true;
        
    })
  }

  }
}
