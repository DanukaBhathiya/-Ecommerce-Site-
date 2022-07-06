import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.scss']
})
export class GetProductComponent implements OnInit {

  productForm = new FormGroup({
    id:new FormControl(null, [Validators.required])
  });

  constructor(private _productService: ProductService) { }

  selectedProduct: any = null;

  ngOnInit(): void {
  }

  searchData(){
    this._productService.searchProduct(this.productForm.get('id')?.value).
    subscribe(response =>{
      this.selectedProduct = response.data;
    }, error => {
      console.log(error)
    })
  }

}
