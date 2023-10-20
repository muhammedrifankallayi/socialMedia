import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const api = ''

@Injectable({
  providedIn: 'root'
})



export class UserserviceService {

  constructor(private http:HttpClient) { }
  
adviceApi(query:any){
 return this.http.get(`https://api.adviceslip.com/advice/search/${query}`)
}

getChatData(id:string){
  return this.http.get(`${api}/getchatdata?id=${id}`)
}

submitChatMsg(data:any){
  return this.http.post(`${api}/submitchat`,{data})
}



}
