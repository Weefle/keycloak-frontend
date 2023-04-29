// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  user_api: 'http://localhost:8080/user/',
  movie_api: 'http://localhost:8080/movies/',
  api_key: '98df78b64e2ffa02ca344247d3361cf4',
  tmdb_api: 'https://api.themoviedb.org/3',
  heroe_api: 'https://superhero-search.p.rapidapi.com/api/',
  authResourceServerConfig: {
    allowedUrls: [
      'http://localhost:8080/movies',
      'http://localhost:8080/user'
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
