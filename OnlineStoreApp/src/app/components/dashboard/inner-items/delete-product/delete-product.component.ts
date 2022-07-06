import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  list: any[]=[];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  private loadAllData(){
    this._productService.loadAllProduct().subscribe(response =>{
      this.list = response.data;
    }, error => {
      console.log(error)
    })
  }

  delete(id: string){
    if(confirm('Are You Sure')){
      this._productService.deleteProduct(id).subscribe(response =>{
      console.log(response);
      this.loadAllData();
    }, error => {
      console.log(error)
    })
    }
  }

}
