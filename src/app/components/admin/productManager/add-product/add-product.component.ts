import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { IBrand } from 'src/app/interfaces/brand';
import { IProduct } from 'src/app/interfaces/product';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private brandService: BrandService,
    private back: Router
  ) { }

  productForm = this.formBuilder.group({
    img: [''],
    name: [''],
    price: 0,
    desc: [''],
    brand: ['']
  })


  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        img: this.productForm.value.img || "",
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        desc: this.productForm.value.desc || "",
        brand: this.productForm.value.brand || ""
      }
      this.productService.addProduct(product).subscribe((data) => {
        this.back.navigate(['admin', 'product'])
      })
    }
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
