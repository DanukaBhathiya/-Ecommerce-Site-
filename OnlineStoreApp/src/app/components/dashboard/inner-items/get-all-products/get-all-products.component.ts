import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.scss']
})
export class GetAllProductsComponent implements OnInit {

  list: any[]=[];

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
}

