/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-disable-next-line
import config from '../environments/TARGET_ENV';

const setRemoteScript = module =>
  new Promise(resolve => {
    // Method for 'versioned' federated remotes
    // const urlParams = new URLSearchParams(window.location.search)
    // const version = urlParams.get('appVersionParam')
    // const remoteUrlWithVersion = `${module}' + version + '/remoteEntry.js`
    const remoteUrlWithVersion = `${module}/remoteEntry.js`;
    const script = document.createElement('script');
    script.src = remoteUrlWithVersion;
    document.head.appendChild(script);
    script.onload = () => resolve();
  }).catch(err => {
    console.log(err, `Error setting script tag for ${module}.`);
  });

const loadComponent = (scope, module) => {
  return async () => {
    await __webpack_init_sharing__('default');
    const container = window[scope];
    // eslint-disable-next-line camelcase
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
};

const loadModuleFrom = remote => {
  remote()
    .then(module => module.default())
    .catch(err => {
      console.log(err, `Error loading default module from ${remote}.`);
    });
};

const initRemote = (remoteScope, remoteModule) => {
  setRemoteScript(config[remoteScope])
    .then(() => {
      const loadedCommponent = loadComponent(remoteScope, remoteModule);
      loadModuleFrom(loadedCommponent);
    })
    .catch(err => {
      console.log(
        err,
        `Error initializing ${remoteModule} from ${remoteScope}.`
      );
    });
};

export default () => initRemote;
