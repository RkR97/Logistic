//import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data1: any = [];
  i!: any;
  allDataSrc: any
  allDataDes: any
  price: any
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
          //this.price = this.data1[0].weights[0].price
          if (this.data.value.kg <= 5) {
            this.price = this.data1[0].weights[0].price
          } else if (this.data.value.kg > 5 && this.data.value.kg <= 10) {
            this.price = this.data1[0].weights[1].price
          } else if (this.data.value.kg > 10 && this.data.value.kg <= 15) {
            this.price = (0.05 * this.data1[0].weights[1].price) + (this.data1[0].weights[1].price)
          } else if (this.data.value.kg <= 30) {
            this.price = (0.10 * this.data1[0].weights[1].price) + (this.data1[0].weights[1].price)
          } else {
            this.alertify.error("Maximum weight is 30Kg")
          }
        }
      })
    } else {
      this.alertify.error("Enter Valid details")
    }
  }

  // search() {
  //   this.authService.getData()
  //     .subscribe(
  //       res => this.data = res,
  //       err => {
  //         if (err instanceof HttpErrorResponse) {
  //           if (err.status === 401)
  //             this.route.navigate(['/signin'])
  //         }
  //       }
  //     )
  // }
}
