import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO } from 'src/app/dto/ProductDTO';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  //product!: ProductDTO;

  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  product: any = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
    })
  }

  // handleProductDetails(){
  //   const id:any = this.route.snapshot.paramMap.get('id');
  //   this._productService.searchProduct(id).subscribe(
  //     data => {
  //       this.product = data;
  //     }
  //   )
  // }
  handleProductDetails(){
    const id:any = this.route.snapshot.paramMap.get('id');
    this._productService.searchProduct(id).
    subscribe(response =>{
      this.product = response.data;
    }, error => {
      console.log(error)
    })
  }

  // handleProductDetails(){
  //   const theProductId = this.route.snapshot.paramMap.get('id');
  //   this._productService.searchProduct(this.route.snapshot.paramMap.get('id')?.value).
  //   subscribe(response =>{
  //     this.product = response.data;
  //   }, error => {
  //     console.log(error)
  //   })
  // }

}
