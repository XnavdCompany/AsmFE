import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() { }
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); // Cập nhật lại cartItems trong Local Storage
    }
  }

  saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  restoreCartItems() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
    }
  }

  
}
