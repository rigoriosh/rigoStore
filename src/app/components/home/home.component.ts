import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'rigoStore';
  products: Product[];
  constructor(private servicioProducto: ProductsService, private misRutas: Router) {
    this.products = this.servicioProducto.getAllPorudcts();
  }

  ngOnInit(): void {
  }
  clickProduct(id: string): void{
    console.log(id);
  }  
  verDetalle(id: string){
    console.log(id);
    this.misRutas.navigate(['products', id]);
  }

}
