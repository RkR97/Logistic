import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = []
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {

  }
  search() {
    this.authService.getData()
      .subscribe(
        res => this.data = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401)
              this.route.navigate(['/signin'])
          }
        }
      )
  }
}
