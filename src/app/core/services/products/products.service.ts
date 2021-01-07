import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];
  constructor(private myHttp: HttpClient) { }
  getProductById(id: string): any {
    return this.myHttp.get<Product>(`${environment.url_Api}/${id}`);
  }

  getAllPorudcts = () => this.myHttp.get<Product[]>(environment.url_Api);

  createPorduct(prod: Product){
    console.log(prod);
    return this.myHttp.post(environment.url_Api, prod);
  }

  upDateProuduct(id: string, changes: Partial<Product>){
    console.log(id, changes, `${environment.url_Api}/${id}`);
    return this.myHttp.put(`${environment.url_Api}/${id}`, changes);
  }

  deleteProd(id: string){
    console.log('eliminando' , id);
    console.log(`${environment.url_Api}/${id}`);
    return this.myHttp.delete(`${environment.url_Api}/${id}`);
  }
}
