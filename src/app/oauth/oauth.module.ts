import {NgModule} from '@angular/core';
import {OauthRedirectComponent} from './oauth.redirect.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [OauthRedirectComponent],
  imports: [
    CommonModule
  ],
  exports: [OauthRedirectComponent]
})
export class OauthModule {
}
