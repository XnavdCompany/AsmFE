import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
import { BrandService } from 'src/app/services/brand.service';
import { IBrand } from 'src/app/interfaces/brand';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: IProduct[] = []
  constructor(private ProductService: ProductService,
    private brandService: BrandService) {
    this.ProductService.getAllProduct().subscribe((response) => {
      this.products = response.data
    }, error => console.log(error))
  }

  brands: IBrand[] = []
  ngOnInit() {
    // Gọi API hoặc tải danh sách thương hiệu từ cơ sở dữ liệu
    this.loadBrands();
  }
  loadBrands() {
    // Gán giá trị từ API hoặc cơ sở dữ liệu vào mảng `brands`
    this.brandService.getAllBrand().subscribe((response) => {
      this.brands = response.data
    })
  }
}
