import { Injectable } from "@angular/core";
import { OAuthService, AuthConfig, JwksValidationHandler } from "angular-oauth2-oidc";
import { User } from "../user";
import { Router } from '@angular/router';


const passwordFlow: AuthConfig = {
  tokenEndpoint: 'http://localhost:8081/oauth/token',
  clientId: 'cliente-agendamento',
  scope: 'openid profile email voucher offline_access read write',
  dummyClientSecret: '',
  useHttpBasicAuth: true
};

const codeFlow: AuthConfig = {
  clientId: 'cliente-agendamento',
  scope: 'read write',
  dummyClientSecret: 'OG9xam2B5CN07FNs5qpnKhfX72YNFZuc6UASeHrD7TeF3eJEsx',
  responseType: 'code',
  oidc: false,
  useHttpBasicAuth: true,
  strictDiscoveryDocumentValidation: false,

  loginUrl: 'http://localhost:8081/oauth/authorize',
  redirectUri: window.location.origin + '/callback',
  tokenEndpoint: 'http://localhost:8081/oauth/token'
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private oAuthService: OAuthService, private router: Router) {
    this.oAuthService.configure(codeFlow);
    this.oAuthService.tryLoginCodeFlow();
  }

  login(user: User): void {
    this.oAuthService.initCodeFlow();
  }
}
