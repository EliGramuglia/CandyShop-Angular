import { Component } from '@angular/core';
import { Candy } from './Candy';
import { CandyCartService } from '../candy-cart.service';
import { CandyDataService } from '../candy-data.service';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrl: './candy-list.component.scss'
})
export class CandyListComponent {
  candies: Candy[] = [] ;


  //Mock de prueba
  /*candies: Candy[] = [
    {
      name: "Galletitas Pokemón",
      type: "Galletitas",
      description: "Galletitas Asiáticas rellenas sabor frambuesa y arandano",
      price: 4600,
      image: "img/picachu.jpeg",
      clearance: false,
      stock: 3,
      quantity: 0,
    },
    {
      name: "Pepitos Pink",
      type: "Galletitas",
      description: "Pepitos Asiáticos con sabor a sal rosada",
      price: 5500,
      image: "img/pepitosrosa.jpeg",
      clearance: false,
      stock: 10,
      quantity: 0,
    },
    {
      name: "Palitos Asiaticos",
      type: "Galletitas",
      description: "Palitos Asiáticos con salsa de chocolate",
      price: 5100,
      image: "img/palitosAsiaticos.jpeg",
      clearance: false,
      stock: 0,
      quantity: 0,
    },
    {
      name: "Snack Hello Kitty",
      type: "Galletitas",
      description: "Snack Yan Yan Hello Kitty sabor Milk",
      price: 4650,
      image: "img/snackHelloKitty.jpeg",
      clearance: true,
      stock: 5,
      quantity: 0,
    },
  ] */
 

  constructor(private cart: CandyCartService, private candiesDataService: CandyDataService){ //inyección de servicios
  }

  ngOnInit(): void {
    this.candiesDataService.getAll().subscribe(candies => this.candies = candies);
  }

  addCandyToCart(candy:Candy): void {
    this.cart.addCandyToCart(candy);
    candy.stock -= candy.quantity;
    candy.quantity = 0;
  }

  maxReached(m: String){
    alert(m);
  }
}
