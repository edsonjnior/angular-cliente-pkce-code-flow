import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../auth/auth.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  callbackParams: any = {};

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {

      this.activatedRoute.queryParams.subscribe(params => this.callbackParams = params);

    //   const body = new HttpParams();
    //   body.set('client_id', 'cliente-agendamento');
    //   body.set('grant_type', 'authorization_code');
    //   body.set('redirect_uri', 'http:/localhost:4200');

    // this.http.post('https://localhost:8443/oauth/token', ).subscribe(response => {
    //   console.log(response);
    // })
  }

  ngOnInit(): void {

  }

}
