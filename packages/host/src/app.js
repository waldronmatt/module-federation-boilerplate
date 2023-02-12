/* eslint-disable no-undef */
import 'the-new-css-reset/css/reset.css';
import 'sanitize.css';
import { importRemote } from '@module-federation/utilities';
// eslint-disable-next-line import/no-unresolved, import/extensions
import environmentConfig from '../environments/TARGET_ENV';
import Heading from './heading/heading';

const heading = new Heading();
heading.render('HOST (Module Federation)');

importRemote({
  url: environmentConfig.FormApp,
  scope: 'FormApp',
  module: './initContactForm',
})
  .then(module => {
    return module.default();
  })
  // eslint-disable-next-line no-console
  .catch(error => console.log(error));

//
// Uncomment below to load dynamic remote on click event
// And uncomment lines in index.html
//

// const getHeader = document.querySelector('#click-me');

// const lazyLoadRemoteApp = () => {
//   importRemote({
//     url: environmentConfig.FormApp,
//     scope: 'FormApp',
//     module: './initContactForm',
//   })
//     .then(({ printForm, setupLogic }) => {
//       // if you want to use individual exports
//       return {
//         p: printForm(),
//         s: setupLogic(),
//       };
//     })
//     // eslint-disable-next-line no-console
//     .catch(error => console.log(error));

//   getHeader.removeEventListener('click', lazyLoadRemoteApp);
// };

// getHeader.addEventListener('click', lazyLoadRemoteApp);
