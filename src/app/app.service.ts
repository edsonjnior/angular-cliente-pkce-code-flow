import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Cookie} from 'ng2-cookies';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from './user';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AppService {
  clientId = 'cliente-agendamento';
  redirectUri = 'http://localhost:4200/callback';
  accessTokenUri = 'http://localhost:8081/oauth/token';
  expirationTime = 1000;
  jwtHelper;

  constructor(private http: HttpClient, private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  retriveToken(user: User) {
    const params = new HttpParams({
      fromObject: {
        grant_type: 'password',
        ...user
      }
    });

    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Basic ' + btoa(this.clientId + ':OG9xam2B5CN07FNs5qpnKhfX72YNFZuc6UASeHrD7TeF3eJEsx')
    });

    this.http
      .post(this.accessTokenUri, params.toString(), {headers})
      .subscribe(
        data => this.saveToken(data),
        error => console.log('Invalid Credentials')
      );
  }

  saveToken(token: any): void {
    const expireDate = new Date().getTime() + (this.expirationTime * token.expires_in);
    Cookie.set('id_token', token.access_token, expireDate);

    console.log('Obtained access token');

    this.getOrganization();
    this.router.navigate(['consultas']);
  }

  getOrganization() {
    const token = Cookie.get('access_token');

    const payload = this.jwtHelper.decodeToken(token);
    console.log(payload);
    // this.organization = payload.organization;
    // return this.organization;
  }

  getResource(resourceUrl: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Bearer ' + Cookie.get('id_token')
    });

    return this.http
      .get(resourceUrl, {headers})
      // .pipe(map((res: Response) => res.json()))
      .pipe(catchError((error: any) => throwError(error)));
  }
}
