import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/signup`, user);
  }

  signin(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/signin`, user)
  }

  logout(): void {
    // Xóa thông tin đăng nhập từ localStorage hoặc thực hiện các thao tác đăng xuất khác
    localStorage.removeItem('credential');
  }

  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('credential')!) || {};
  }

  getUserEmail(): string | null {
    const credential = JSON.parse(localStorage.getItem('credential')!) || {};
    return credential?.user?.email || null;
  }

  getUserRole(): string | null {
    const credential = JSON.parse(localStorage.getItem('credential')!) || {};
    return credential?.user?.role || null;
  }

}

