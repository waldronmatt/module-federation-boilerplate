# Module Federation Template

**[Host App](https://module-federation-template-host.netlify.app)**

[![Host App Netlify Status](https://api.netlify.com/api/v1/badges/dd3fd5c7-0168-4cd7-a56a-673503681f86/deploy-status)](https://app.netlify.com/sites/module-federation-template-host/deploys)

**[Remote App](https://module-federation-template-remote.netlify.app)**

[![Remote App Netlify Status](https://api.netlify.com/api/v1/badges/5ba4ad1f-811d-493f-8030-92e9ba296a43/deploy-status)](https://app.netlify.com/sites/module-federation-template-remote/deploys)

A dynamic, multi-environment module federation template.

## Installation

Install dependencies:

```bash
yarn
```

Link local packages together and install remaining package dependencies:

```bash
yarn bootstrap
```

## Getting Started

Run dev environment for host and remote in parallel:

```bash
npm run dev
```

Build and serve host and remote on Netlify:

```bash
yarn build
```

Build and serve host and remote via Express:

```bash
yarn prod
```

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Lint `.js` files across packages:

```bash
yarn lint
```

## License

MIT
