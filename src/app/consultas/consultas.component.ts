import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  accessToken: string = '';
  resourceUrl = 'http://localhost:8080/consultas';
  consultas = [];

  constructor(private authService: OAuthService) {
  }

  ngOnInit(): void {
    const claims = this.authService.getIdentityClaims();
    console.log(JSON.stringify(claims, null, ''));
  }
}
