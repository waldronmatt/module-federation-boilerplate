/* eslint-disable no-undef */
/* eslint-disable no-console */
import config from '../environments/TARGET_ENV';

const setRemoteScript = endpoint =>
  new Promise(resolve => {
    // Method for 'versioned' federated remotes
    // const urlParams = new URLSearchParams(window.location.search);
    // const version = urlParams.get('appVersionParam');
    // const remoteUrlWithVersion = `${module}${version}/remoteEntry.js`;
    const remoteUrlWithVersion = `${endpoint}/remoteEntry.js`;
    const script = document.createElement('script');
    script.src = remoteUrlWithVersion;
    document.head.append(script);
    script.addEventListener('load', () => resolve());
  }).catch(error => {
    console.log(error, `Error setting script tag for ${endpoint}.`);
  });

const loadComponent = (scope, module) => {
  return async () => {
    await __webpack_init_sharing__('default');
    const container = window[scope];
    // eslint-disable-next-line camelcase
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    return factory();
  };
};

const loadModuleFrom = remote => {
  remote()
    .then(module => module.default())
    .catch(error => {
      console.log(error, `Error loading default module from ${remote}.`);
    });
};

const initRemote = (remoteScope, remoteModule) => {
  setRemoteScript(config[remoteScope])
    .then(() => {
      const loadedComponent = loadComponent(remoteScope, remoteModule);
      return loadModuleFrom(loadedComponent);
    })
    .catch(error => {
      console.log(
        error,
        `Error initializing ${remoteModule} from ${remoteScope}.`
      );
    });
};

export default () => initRemote;
