import {Injectable} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from '../auth/auth.config';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private oAuthService: OAuthService, private router: Router) {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.setStorage(sessionStorage);
    this.oAuthService.tryLogin({});
  }

  handleLogin(): void {
    this.oAuthService.initCodeFlow();
  }

  handleLogout(): void {
    this.oAuthService.logOut();
  }

  getAccessToken() {
    return this.oAuthService.getAccessToken();
  }
}
