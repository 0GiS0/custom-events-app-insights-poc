// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  containerName: "alteregos",
  apiUrl: "https://localhost:5001/api/hero",
  appInsights: {
    instrumentationKey: "67e81efa-8a4d-4add-a5cc-78770a6fa5e2"
  },
  storageUrl: "https://herostore.blob.core.windows.net"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
