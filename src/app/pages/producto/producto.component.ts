import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos:any[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProductos().subscribe((resp:any)=>{
      console.log(resp)
      this.productos = resp.product;
    });
  }

}
