import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDTO } from 'src/app/dto/ProductDTO';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  // list: any[]=[];

  productForm = new FormGroup({
    id:new FormControl(null, [Validators.required]),
    category:new FormControl(null, [Validators.required]),
    name:new FormControl(null, [Validators.required]),
    description:new FormControl(null, [Validators.required]),
    unit_price:new FormControl(null, [Validators.required]),
    image_url:new FormControl(null, [Validators.required]),
    // active:new FormControl(null, [Validators.required]),
    units_in_stock:new FormControl(null, [Validators.required])
    // date_created:new FormControl(null, [Validators.required])
    // last_updated:new FormControl(null, [Validators.required])
  });

  selectedProduct: any = null;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  // private loadAllData(){
  //   this._productService.loadAllProduct().subscribe(response =>{
  //     this.list = response.data;
  //   }, error => {
  //     console.log(error)
  //   })
  // }

  updateData(){
    const dto = new ProductDTO(
      this.productForm.get('id')?.value,
      this.productForm.get('category')?.value,
      this.productForm.get('name')?.value,
      this.productForm.get('description')?.value,
      this.productForm.get('unit_price')?.value,
      this.productForm.get('image_url')?.value,
      //this.saveForm.get('active')?.value,
      this.productForm.get('units_in_stock')?.value
      // this.saveForm.get('date_created')?.value,
      // this.saveForm.get('last_updated')?.value
    );
    this._productService.updateProduct(dto).subscribe(response => {
      console.log(response);
      // this.loadAllData();
    }, error => {
    console.log(error);
    })
  }

  search(){
    this._productService.searchProduct(this.productForm.get('id')?.value).subscribe(response =>{
      this.selectedProduct = response.data;
      this.productForm.patchValue({
        category: this.selectedProduct.category,
        name: this.selectedProduct.name,
        description: this.selectedProduct.description,
        unit_price: this.selectedProduct.unit_price,
        image_url: this.selectedProduct.image_url,
        // active: this.selectedProduct.active,
        units_in_stock: this.selectedProduct.units_in_stock
        // date_created: this.selectedProduct.date_created,
        // last_updated: this.selectedProduct.last_updated,
      })
    }, error => {
      console.log(error)
    })
  }

}
