import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})

export class NavBar {
  constructor(public cartService: CartService) {}

  getCartCount(): number {
    return this.cartService.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}