// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
  headerHostName: 'X-RapidAPI-Host',
  headerHostValue: 'community-open-weather-map.p.rapidapi.com',
  headerKeyName: 'X-RapidAPI-Key',
  headerKeyValue: '42052af557mshdd44e4b7c531959p16c7a6jsnd8fd3e69cd3b'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
