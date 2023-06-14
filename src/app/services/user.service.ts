import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<{data:IUser[]}> {
    return this.http.get<{data:IUser[]}>('http://localhost:8080/api/user');
  }
  getOneUser(id: any): Observable<{data:IUser}> {
    return this.http.get<{data:IUser}>('http://localhost:8080/api/user/' + id);
  }
  deleteUser(id: any): Observable<IUser> {
    return this.http.delete<IUser>('http://localhost:8080/api/user/' + id);
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`http://localhost:8080/api/user/${user._id}`, user)
  }
  
}
