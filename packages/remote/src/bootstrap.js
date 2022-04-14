/*
  We're loading the whole application with dynamic imports in this entry point.
  This gives webpack the time needed for the negotiation and loading the shared
  libraries (jquery) when the application starts.
  https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/

  Webpack docs:
  We strongly recommend using an asynchronous boundary. It will split out the initialization code of a
  larger chunk to avoid any additional round trips and improve performance in general.
  https://webpack.js.org/concepts/module-federation/#troubleshooting
*/

import('./app');
