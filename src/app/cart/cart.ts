import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})

export class Cart {
  constructor(public cartService: CartService) {}

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }
}