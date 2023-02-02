import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, AfterViewChecked } from '@angular/core';
import { ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GoogleServiceService } from '../google-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewChecked, OnInit {
  user: Object = {};
  userDetails: any;
  @ViewChild('loginForm') customerLoginForm: any;
  constructor(
    private routes: Router,
    private dataServiceRef: DataService,
    private readonly google: GoogleServiceService,
    private authService: SocialAuthService,
    private popup: NgbModal
  ) {}
  // private readonly google:GoogleServiceService
  ngOnInit(): void {
    //gmail details
    this.authService.authState.subscribe((user) => {
      this.user = user;
      localStorage.setItem('googleUser', JSON.stringify(this.user));
      this.userDetails = localStorage.getItem('googleUser');
      if (JSON.parse(this.userDetails)) {
        this.routes.navigate(['/selling']);
      }
    });
  }

  ngAfterViewChecked(): void {
    this.dataServiceRef.adminCheck1 = false;
  }

  //USER LOGIN
  loginUser1(loginForm: any): void {
    this.dataServiceRef.userAuthentication(loginForm, this.user);
    this.customerLoginForm.reset();
  }
}
