//import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';

// for table import
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag: boolean = false
  resData: any
  i!: any;
  allDataSrc: any
  allDataDes: any
  price: any
  partnerName: any
  constructor(private authService: AuthService, private alertify: AlertifyService, private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authService.getAllDataSrc().subscribe((res: any) => {
      this.allDataSrc = res.data;
    })

    this.authService.getAllDataDes().subscribe((res: any) => {
      this.allDataDes = res.data;
    })
  }
  data = this.fb.group({
    src: ['', Validators.required],
    des: ['', Validators.required],
    km: [''],
    kg: ['', Validators.required]
  })

  onSubmit() {
    if (this.data.valid) {
      this.authService.getData(this.data.value.src, this.data.value.des).subscribe((res: any) => {
        if (res.status == 200) {
          this.resData = res.data
          this.partnerName = this.resData[0].partner
        }
      })
    }
  }
  displayPrice() {
    this.flag = !this.flag
  }
}








