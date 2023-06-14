import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products : IProduct[] = []
  constructor(private ProductService:ProductService){
    this.ProductService.getAllProduct().subscribe((response) => {
      this.products = response.data
    },error => console.log(error))
  }
}
