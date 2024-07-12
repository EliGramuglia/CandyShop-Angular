import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandyListComponent } from './candy-list/candy-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { CandyShopComponent } from './candy-shop/candy-shop.component';
import { CandyContactComponent } from './candy-contact/candy-contact.component';
import { HowToBuyComponent } from './how-to-buy/how-to-buy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
//import { HttpClientModule } from '@angular/common/http'; esta deprecado
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ 
  declarations: [
    AppComponent,
    CandyListComponent,
    ShoppingCartComponent,
    CandyShopComponent,
    CandyContactComponent,
    HowToBuyComponent,
    NotFoundComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HttpClientModule,

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
