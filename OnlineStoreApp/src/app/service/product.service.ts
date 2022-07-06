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

  public updateProduct(dto:ProductDTO):Observable<any>{
    return this._http.put('http://localhost:8080/api/v1/product/admin/item',{
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

  public searchProduct(id:string):Observable<any>{
    return this._http.get('http://localhost:8080/api/v1/product/admin/item?id='+id);
  }

  public loadAllProduct():Observable<any>{
    return this._http.get('http://localhost:8080/api/v1/product/admin/item/list');
  }

  public deleteProduct(id:string):Observable<any>{
    return this._http.delete('http://localhost:8080/api/v1/product/admin/item?id='+id);
  }
}
