import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;
  productId: number | string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartService.saveCartItems();
    console.log('Added to cart:', product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      if (this.productId) {
        this.productService.getOneProduct(this.productId).subscribe(
          (response) => {
            this.product = response.data;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
}
