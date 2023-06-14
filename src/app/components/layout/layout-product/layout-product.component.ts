import { Component } from '@angular/core';
import { IBrand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-layout-product',
  templateUrl: './layout-product.component.html',
  styleUrls: ['./layout-product.component.css']
})
export class LayoutProductComponent {
  constructor(private brandService: BrandService){}
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
