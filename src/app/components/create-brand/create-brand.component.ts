import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent {
  brand = new Brand();

  form = this.formBuilder.group({
    name: ["", Validators.required],
    description: ""
  })
  
  constructor(private brandService: BrandService, private formBuilder: FormBuilder) {}
  
  create(): void {
    this.brand.name = this.form.value.name ?? "";
    this.brand.description = this.form.value.description ?? "";

    console.log("Creating..");
    this.brandService.postBrand(this.brand).subscribe((result: Brand) => (this.brand = result));
    console.log("Created");
    console.log(this.brand);
  }
}
