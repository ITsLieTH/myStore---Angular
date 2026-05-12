import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})

export class Checkout {
  name: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  submitOrder(): void {
    this.cartService.clearCart();
    this.router.navigate(['/confirmation']);
  }

  onNameChange(value: string): void {
    this.name = value;
  }

  onAddressChange(value: string): void {
    this.address = value;
  }

  onCreditCardChange(value: string): void {
    this.creditCard = value;
  }
}