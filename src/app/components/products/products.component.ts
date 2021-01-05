import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() producto: Product | undefined;
  @Output() productSelected: EventEmitter<string> = new EventEmitter();
  
  constructor() { }


  addCar(id: string): void{
    console.log(`'añadir: ${id}`);
    this.productSelected.emit(id);
}


}
