import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  producto: Product | undefined;

  constructor(private misRutas: ActivatedRoute, private servicioProducto: ProductsService) {}

  ngOnInit(): void {
    this.misRutas.params.subscribe(productoSelected => {
      console.log(productoSelected, productoSelected.id);
      this.getProduct(productoSelected.id);
    });
  }

  getProduct(id: string): void{
    const product = this.servicioProducto.getProductById(id).subscribe((product: Product) => {
      console.log(product);
      this.producto = product;
    });
  }

}
