import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {OAuthModule, OAuthStorage} from "angular-oauth2-oidc";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export function storageFactory(): OAuthStorage{
  return sessionStorage;
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080'],
        sendAccessToken: true
      }
    })
  ],
  providers: [
    {provide: OAuthStorage, useFactory: storageFactory}
  ]
})
export class HomeModule{
}
