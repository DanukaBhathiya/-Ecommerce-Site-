import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDTO } from 'src/app/dto/ProductDTO';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.scss']
})
export class SaveProductComponent implements OnInit {

  saveForm = new FormGroup({
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

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  saveData(){
    const dto = new ProductDTO(
      this.saveForm.get('id')?.value,
      this.saveForm.get('category')?.value,
      this.saveForm.get('name')?.value,
      this.saveForm.get('description')?.value,
      this.saveForm.get('unit_price')?.value,
      this.saveForm.get('image_url')?.value,
      //this.saveForm.get('active')?.value,
      this.saveForm.get('units_in_stock')?.value
      // this.saveForm.get('date_created')?.value,
      // this.saveForm.get('last_updated')?.value
    );
    this._productService.saveProduct(dto).subscribe(response => {
      console.log(response);
    }, error => {
    console.log(error);
    })
  }

  url="./assets/dami.png";

  onSelectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      }
    }
  }
}
