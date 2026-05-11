import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Confirmation } from './confirmation/confirmation';

export const routes: Routes = [
  { path: '', component: ProductList},
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'confirmation', component: Confirmation },
  { path: '**', redirectTo: '' }
];