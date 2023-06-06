import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data
    })
  }


  removeProduct(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    })
  }
}
