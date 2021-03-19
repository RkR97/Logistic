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

  flag: boolean = false
  resData: any
  allDataSrc: any
  price: any = []
  partnerName: any = []
  name: any = []
  source: any
  destination: any
  distance: any
  constructor(private authService: AuthService, private alertify: AlertifyService, private route: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.authService.getAllDataSrc().subscribe((res: any) => {
      this.allDataSrc = res.data;
    })

  }

  data = this.fb.group({
    src: ['', Validators.required],
    des: ['', Validators.required],
    km: [0],
    kg: ['', Validators.required]
  })

  onSubmit() {
    if (this.data.valid) {
      this.authService.getData(this.data.value.src, this.data.value.des).subscribe((res: any) => {
        if (res.status == 200) {
          this.source = this.data.value.src
          this.destination = this.data.value.des
          this.distance = this.data.value.km
          this.resData = res.data
          this.partnerName = this.resData[0].partner
          this.name = Object.keys(this.partnerName)
          for (let i = 0; i < res.x.length; i++) {
            this.price[i] = Math.floor((res.x[i] * 0.01 * this.data.value.km + parseInt(this.data.value.km)) +
              (res.y[i] * 0.01 * this.data.value.kg + parseInt(this.data.value.kg)))
          }
          if (this.data.value.km != 0) {
            this.flag = true
          }
          this.data.reset()
        } else {
          alert("No service to this Route yet")
        }
      })
    } else {
      console.log("enter valid input")
    }

  }
}








