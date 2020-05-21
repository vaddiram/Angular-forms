import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = "http://127.0.0.1:3000/";

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http:HttpClient) { }

  addEmployee(formData):Observable<any>{
    return this.http.post(apiURL+'addUser',formData)
  }
  getEmployee():Observable<any>{
    return this.http.get(apiURL+'getAllusers')
}
  deleteEmployee(id):Observable<any>{
    return this.http.delete(apiURL+'deleteUser/'+id)
}
getSingleEmployee(id):Observable<any>{
  return this.http.get(apiURL+'getSingleUser/'+id)
}
getUpdatedEmployee(data,id):Observable<any>{
  return this.http.put(apiURL+'updateUser/'+id,data)

}
}
