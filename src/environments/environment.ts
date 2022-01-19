// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'gmh-backend',
    appId: '1:763311922578:web:c8fe68d05db2970eab354b',
    storageBucket: 'gmh-backend.appspot.com',
    apiKey: 'AIzaSyCwSpueJcLJWaOU_TVynv-uILMYiaECunE',
    authDomain: 'gmh-backend.firebaseapp.com',
    messagingSenderId: '763311922578',
  },
  production: false,
  API_URL: 'http://ec2-3-98-124-243.ca-central-1.compute.amazonaws.com:8080',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
