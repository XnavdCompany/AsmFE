import { Injectable } from '@angular/core';
import { IBrand } from '../interfaces/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  API_URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAllBrand(): Observable<{data:IBrand[]}> {
    return this.http.get<{data:IBrand[]}>(`${this.API_URL}/brand`)
  }

  getOneBrand(id: any): Observable<IBrand> {
    return this.http.get<IBrand>(`${this.API_URL}/brand/` + id)
  }

  addBrand(brand: IBrand): Observable<IBrand> {
    return this.http.post<IBrand>(`${this.API_URL}/brand`, brand)
  }

  editBrand(brand: IBrand): Observable<IBrand> {
    return this.http.put<IBrand>(`${this.API_URL}/brand/${brand._id}`, brand)
  }
}
