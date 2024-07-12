import { Injectable } from '@angular/core';
import { Candy } from './candy-list/Candy';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CandyCartService {
  private _cartList: Candy[] = [];
  cartList: BehaviorSubject<Candy[]> = new BehaviorSubject<Candy[]>([]);

  constructor() { }

  addCandyToCart(candy: Candy){
    let item: Candy | undefined = this._cartList.find((v1) => v1.name == candy.name);
    if(!item) {
      this._cartList.push({...candy});      
    } else {
      item.quantity += candy.quantity;
    }
    this.cartList.next(this._cartList);
  }

  removeCandyFromCart(candy: Candy) {
    //Filtramos el array para eliminar el artículo que coincide con candy.name (es como su ID)
    this._cartList = this._cartList.filter(item => item.name !== candy.name);
    this.cartList.next(this._cartList);
  }
}
