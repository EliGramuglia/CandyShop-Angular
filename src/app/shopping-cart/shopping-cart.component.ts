import { Component } from '@angular/core';
import { CandyCartService } from '../candy-cart.service';
import { Candy } from '../candy-list/Candy';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  cartList$: Observable<Candy[]>;

  constructor(private cart: CandyCartService){
   this.cartList$ = cart.cartList.asObservable();
  }

  removeCandyFromCart(candy: Candy) {
    this.cart.removeCandyFromCart(candy);
  }
  
}
