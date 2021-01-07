import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'rigoStore';
  products: Product[];
  constructor(private servicioProducto: ProductsService, private misRutas: Router) {
    this.products = [];
  }

  fetchProduct(): void{
    this.servicioProducto.getAllPorudcts().subscribe(p => {
      console.log(p);
      this.products = p;
    });
  }

  ngOnInit(): void {
    this.fetchProduct();
  }
  clickProduct(id: string): void{
    console.log(id);
  }
  verDetalle(id: string): void{
    console.log(id);
    this.misRutas.navigate(['products', id]);
  }

}
