import {AuthConfig} from "angular-oauth2-oidc";

export const authPasswordFlowConfig: AuthConfig = {
  tokenEndpoint: 'http://localhost:8081/oauth/token',
  clientId: 'cliente-agendamento',
  scope: 'openid profile email voucher offline_access read write',
  dummyClientSecret: '',
  useHttpBasicAuth: true
};

export const authCodeFlowConfig: AuthConfig = {
  clientId: 'cliente-agendamento',
  scope: 'read write',
  dummyClientSecret: 'OG9xam2B5CN07FNs5qpnKhfX72YNFZuc6UASeHrD7TeF3eJEsx',
  responseType: 'code',
  oidc: false,
  useHttpBasicAuth: true,
  strictDiscoveryDocumentValidation: false,

  loginUrl: 'https://localhost:8081/oauth/authorize',
  logoutUrl: 'https://localhost:8081/logout',
  redirectUri: window.location.origin + '/callback',
  tokenEndpoint: 'https://localhost:8081/oauth/token'
}
