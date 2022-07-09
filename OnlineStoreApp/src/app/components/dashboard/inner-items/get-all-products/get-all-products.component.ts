import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { UpdateProductComponent } from 'src/app/components/dashboard/inner-items/update-product/update-product.component';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.scss']
})
export class GetAllProductsComponent implements OnInit {

  list: any[]=[];

  selectedProduct: any = null;


  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  private loadAllData(){
    this._productService.loadAllProduct().
    subscribe(response =>{
      this.list = response.data;
    }, error => {
      console.log(error)
    })
  }

  // delete(id: string){
  //   if(confirm('Are You Sure')){
  //     this._productService.deleteProduct(id).subscribe(response =>{
  //     console.log(response);
  //     this.loadAllData();
  //   }, error => {
  //     console.log(error)
  //   })
  //   }
  // }

  // search(id: string){
  //   this._productService.searchProduct(id).subscribe(response =>{
  //     this.selectedProduct = response.data;
  //     this._updateProductComponent.productForm.patchValue({
  //       category: this.selectedProduct.category,
  //       name: this.selectedProduct.name,
  //       description: this.selectedProduct.description,
  //       unit_price: this.selectedProduct.unit_price,
  //       image_url: this.selectedProduct.image_url,
  //       // active: this.selectedProduct.active,
  //       units_in_stock: this.selectedProduct.units_in_stock
  //       // date_created: this.selectedProduct.date_created,
  //       // last_updated: this.selectedProduct.last_updated,
  //     })
  //   }, error => {
  //     console.log(error)
  //   })
  // }
}

