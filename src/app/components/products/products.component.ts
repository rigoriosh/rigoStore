import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() producto: Product | undefined;
  @Output() productSelected: EventEmitter<string> = new EventEmitter();

  constructor(private mySericio: ProductsService) { }


  addCar(id: string): void{
    console.log(`'añadir: ${id}`);
    this.productSelected.emit(id);
    this.mySericio.createPorduct({
      id: 'rigo' + Date.now.length,
      image: 'assets/images/hoodie.png',
      title: 'Hoodie Rigo',
      price: 800000,
      description: 'The best'
    }).subscribe(pc => console.log);
}

editaP(id: string): void{
  this.mySericio.upDateProuduct(id, {price: 50000}).subscribe(r => console.log);
}
deleteP(id: string){
  console.log('eliminando', id);
  this.mySericio.deleteProd(id).subscribe(r => {
    console.log('producto eliminado', r);
  });
}


}
