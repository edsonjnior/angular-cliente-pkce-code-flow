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

  accessToken: string;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {

  }

  ngOnInit(): void {
    this.accessToken = this.authService.getAccessToken();
  }

}
