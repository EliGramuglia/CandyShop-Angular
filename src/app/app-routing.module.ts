import { CandyContactComponent } from './candy-contact/candy-contact.component';
import { CandyShopComponent } from './candy-shop/candy-shop.component';
import { HowToBuyComponent } from './how-to-buy/how-to-buy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'candy',
    pathMatch: 'full'
  },
  {
    path: 'candy',
    component: CandyShopComponent
  },
  {
    path: 'contacto',
    component: CandyContactComponent
  },
  {
    path: 'como-comprar',
    component: HowToBuyComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
