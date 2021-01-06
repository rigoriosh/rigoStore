import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  producto: any;

  constructor(private misRutas: ActivatedRoute, private servicioProducto: ProductsService) { }

  ngOnInit(): void {
    this.misRutas.params.subscribe(d => {
      console.log(d, d.id);
      this.getProduct(d.id);
    });
  }

  getProduct(id: string): void{
    const product = this.servicioProducto.getProductById(id);
    console.log(product);
    this.producto = product;
  }

}
