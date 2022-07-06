import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDTO } from '../dto/ProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  public saveProduct(dto:ProductDTO):Observable<any>{
    return this._http.post('http://localhost:8080/api/v1/product/admin/item',{
      id: dto.id,
      category: dto.category,
      name: dto.name,
      description: dto.description,
      unit_price: dto.unit_price,
      image_url: dto.image_url,
      // active: dto.active,
      units_in_stock: dto.units_in_stock
      // date_created:dto.date_created,
      // last_updated:dto.last_updated
    });
  }

}
