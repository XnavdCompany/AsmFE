import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBrand } from 'src/app/interfaces/brand';
import { IProduct } from 'src/app/interfaces/product';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    img: [''],
    name: [''],
    price: 0,
    desc: [''],
    brand: ['']
  })

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private back: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productService.getOneProduct(id).subscribe(response => {
        const product: IProduct = response.data;
        if (product !== undefined && product !== null) {
          this.product = product;
          this.productForm.patchValue({
            name: product.name,
            price: product.price,
            img: product.img,
            desc: product.desc,
            brand: product.brand
          })
        } else {
          // Xử lý trường hợp không tìm thấy sản phẩm
        }
      })
    })
  }

  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        img: this.productForm.value.img || "",
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        desc: this.productForm.value.desc || "",
        brand: this.productForm.value.brand || ""
      }
      this.productService.updateProduct(product).subscribe((data) => {
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
