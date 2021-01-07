import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productos: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(private productsService: ProductsService) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void{
    this.productsService.getAllPorudcts().subscribe(productos => {
      this.productos = productos;
    });
  }

  deleteProduct(id: string): void{
    this.productsService.deleteProd(id).subscribe(r => {
      console.log(r);
      this.fetchProducts()
    });
  }

}
