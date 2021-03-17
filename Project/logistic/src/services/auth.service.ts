import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registrationUrl = "http://localhost:5000/signup";
  private loginUrl = "http://localhost:5000/signin";
  private dataUrl = "http://localhost:5000/data";
  private allDataSrc = "http://localhost:5000/allData/src";
  private allDataDes = "http://localhost:5000/allData/des";
  constructor(private http: HttpClient, private route: Router) { }

  getAllDataSrc() {
    return this.http.get(this.allDataSrc);
  }

  getAllDataDes() {
    return this.http.get(this.allDataDes);
  }

  getData(src: any, des: any) {
    return this.http.get(`${this.dataUrl}/${src}/${des}`);
  }
  registerationUser(newUser: any) {
    return this.http.post(this.registrationUrl, newUser);
  }

  loginUser(user: any) {
    return this.http.post(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.route.navigate(['logout'])
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getUserName() {
    return localStorage.getItem('userName')
  }
}
