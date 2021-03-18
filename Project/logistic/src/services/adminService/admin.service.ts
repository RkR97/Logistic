import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminLoginUrl = "http://localhost:5000/admin";
  constructor(private http: HttpClient, private route: Router, private alertify: AlertifyService) { }

  adminlogin(adminDetails: any) {
    return this.http.post(this.adminLoginUrl, adminDetails)
  }

  getAdminUserName() {
    return localStorage.getItem("adminUserName");
  }

  adminLoggedOut() {
    localStorage.removeItem("adminUserName");
    this.route.navigate(['admin'])
  }
}
