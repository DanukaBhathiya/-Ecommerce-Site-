import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    active:new FormControl(null, [Validators.required]),
    units_in_stock:new FormControl(null, [Validators.required])
    // date_created:new FormControl(null, [Validators.required])
    // last_updated:new FormControl(null, [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  saveData(){
    
  }

}
