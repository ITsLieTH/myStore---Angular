import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item!: Product;
  @Output() removed = new EventEmitter<Product>();

  remove(): void {
    this.removed.emit(this.item);
  }
}