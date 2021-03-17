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
  data1: any;
  i!: any;
  allDataSrc: any
  allDataDes: any
  price: any = []
  name: any = []
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
    kg: ['', Validators.required]
  })

  onSubmit() {
    if (this.data.valid) {
      this.authService.getData(this.data.value.src, this.data.value.des).subscribe((res: any) => {
        if (res.status == 200) {
          this.data1 = res.data
          //console.log(this.data1)
          for (this.i = 0; this.i <= this.data1.length + 1; this.i++) {
            this.name.push(this.data1[0].partner[this.i].name)
          }
          //console.log(this.name)
          for (this.i = 0; this.i <= this.data1.length + 1; this.i++) {
            //this.price.push(this.data1[0].partner[this.i].price)
            this.price.push((this.data.value.kg * this.data1[0].partner[this.i].price))
          }
          //console.log(this.price)
        }
      })
    }
  }
  displayPrice() {
    this.flag = !this.flag
  }
}








