import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, user } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  url='https://localhost:5000'

  postregister(data:user){
    return this.http.post(`${this.url}/user/register`,data)
  }
  postlogin(data:login){
    return this.http.post(`${this.url}/user/login`,data)
  }

  
}
