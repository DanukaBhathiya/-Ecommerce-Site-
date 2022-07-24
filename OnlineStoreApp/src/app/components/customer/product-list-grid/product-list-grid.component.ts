import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list-grid',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.scss'],
})
export class ProductListGridComponent implements OnInit {
  list: any[] = [];

  selectedProduct: any = null;
  selectedCategory: any = null;
  product: any = null;

  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.loadAllData();
    });
    // this.loadAllData();
  }

  private loadAllData() {

    const searchMode = this.route.snapshot.paramMap.has('keyword');

    if(searchMode){
      this.handleSearchProducts();
    }
    else{
      const hascategory: boolean = this.route.snapshot.paramMap.has('category');

    if (hascategory) {
      this.selectedCategory = this.route.snapshot.paramMap.get('category');
    } else {
      this._productService.loadAllProduct().subscribe(
        (response) => {
          this.list = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    }


    // const hascategory: boolean = this.route.snapshot.paramMap.has('category');

    // if (hascategory) {
    //   this.selectedCategory = this.route.snapshot.paramMap.get('category');
    // } else {
    //   this._productService.loadAllProduct().subscribe(
    //     (response) => {
    //       this.list = response.data;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    }

    // this._productService.loadAllProduct(this.selectedCategory).subscribe(
    //   (response) => {
    //     this.list = response.data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    this._productService.searchProduct(this.selectedCategory).
    subscribe(response =>{
      this.product = response.data;
    }, error => {
      console.log(error)
    })
  }

  handleSearchProducts(){
    const theKeyword:any = this.route.snapshot.paramMap.get('keyword')

    this._productService.searchProduct(theKeyword).
  subscribe(response =>{
    this.product = response.data;
  }, error => {
    console.log(error)
  });
  }

  handleListProducts(){
    
  }

  // const theKeyword: any = this.route.snapshot.paramMap.get('keyword');

  // this._productService.searchProduct(theKeyword).
  // subscribe(response =>{
  //   this.product = response.data;
  // }, error => {
  //   console.log(error)
  // })

}
