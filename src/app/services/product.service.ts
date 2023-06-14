import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<{data:IProduct[]}> {
    return this.http.get<{data:IProduct[]}>('http://localhost:8080/api/product')
  }
  getOneProduct(id: any): Observable<{data:IProduct}> {
    return this.http.get<{data:IProduct}>('http://localhost:8080/api/product/' +id)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:8080/api/product', product)
  }
  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8080/api/product/' + id)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:8080/api/product/${product._id}`, product)
  }
}
