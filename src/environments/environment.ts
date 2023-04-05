// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  foo_api: 'http://45.147.96.160:8080/foo/',
  user_api: 'http://45.147.96.160:8080/user/',
  heroe_api: 'https://superhero-search.p.rapidapi.com/api/',
  authResourceServerConfig: {
    allowedUrls: [
      'http://45.147.96.160:8081/api/test',
      'http://45.147.96.160:8080/api/test',
      'http://45.147.96.160:8080/foo'
    ],
    sendAccessToken: true
  },
  authConfig: {
    requireHttps: false,
    issuer: 'http://45.147.96.160:8180/auth/realms/myrealm',
    redirectUri: window.location.origin,
    clientId: 'frontend-client',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
