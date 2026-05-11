import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  addToCart(product: Product): void {
    const existing = this.cartItems.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter(p => p.id !== product.id);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}