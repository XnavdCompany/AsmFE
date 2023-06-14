import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}


  removeFromCart(item: any) {
    // Thực hiện các thao tác để xóa sản phẩm khỏi giỏ hàng
    // Ví dụ: sử dụng service để xóa sản phẩm khỏi danh sách
    this.cartService.removeFromCart(item);
  }

  ngOnInit() {
    this.cartService.restoreCartItems();
    this.cartItems = this.cartService.cartItems;
  }
}
