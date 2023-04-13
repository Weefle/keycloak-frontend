export const environment = {
  production: true,
  foo_api: 'http://45.147.96.160:8080/foo/',
  user_api: 'http://45.147.96.160:8080/user/',
  movie_api: 'http://45.147.96.160:8080/movies/',
  api_key: '98df78b64e2ffa02ca344247d3361cf4',
  tmdb_api: 'https://api.themoviedb.org/3',
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
