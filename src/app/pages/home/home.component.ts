import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empleados:any[] = [];

  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    this.service.getEmpleados().subscribe((resp:any)=>{
      console.log(resp.employees)
      this.empleados = resp.employees;
    })
  }

}
