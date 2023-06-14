import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { IBrand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  constructor(private formBuilder: FormBuilder,
    private brandService: BrandService,
    private back: Router
  ) { }

  brandForm = this.formBuilder.group({
    name: ['']
  })

  onHandleSubmit() {
    if (this.brandForm.valid) {
      const brand: IBrand = {
        name: this.brandForm.value.name || "",
      }
      this.brandService.addBrand(brand).subscribe((data) => {
        this.back.navigate(['admin', 'brand'])
      })
    }
  }
}
