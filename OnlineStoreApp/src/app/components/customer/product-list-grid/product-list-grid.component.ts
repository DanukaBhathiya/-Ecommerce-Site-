import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list-grid',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.scss']
})
export class ProductListGridComponent implements OnInit {

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

}
