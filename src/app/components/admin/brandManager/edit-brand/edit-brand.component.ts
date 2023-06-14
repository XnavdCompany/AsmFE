import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IBrand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {
  brand!: IBrand;
  brandForm = this.formBuilder.group({
    name: ['']
  })
  constructor(
    private brandService: BrandService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private back: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.brandService.getOneBrand(id).subscribe(brand => {
        this.brand = brand;
        
        this.brandForm.patchValue({
          name: brand.name,
        })
      })
    })
  }

  onHandleEdit() {
    if (this.brandForm.valid) {
      const brand: IBrand = {
        _id: this.brand._id,
        name: this.brandForm.value.name || "",
      }
      this.brandService.editBrand(brand).subscribe((data) => {
        this.back.navigate(['admin', 'brand'])
      })
    }
  }
}
