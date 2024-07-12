import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candy } from '../candy-list/Candy';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity: number = 0;
  
  @Input()
  max: number = 0;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  upCandy(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else{
      this.maxReached.emit("Se alcanzó el límite de Stock disponible")
    }
  }

  downCandy(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
    
  changeQuantity(event: any): void{ 
    let input = event.target.value;
    let quantity = Number(input);

    if(!isNaN(quantity) && Number.isFinite(quantity)){
      if(quantity < 0){
        quantity = 0;
      } else if(quantity > this.max){
        quantity = this.max;
      }
      this.quantity = quantity;
    }
    else {
      this.quantity = 0;
    }
   
    this.quantityChange.emit(this.quantity);
  }
}
