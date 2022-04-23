# Module Federation Template

**[Host App](https://module-federation-template-host.netlify.app)**

[![Host App Netlify Status](https://api.netlify.com/api/v1/badges/dd3fd5c7-0168-4cd7-a56a-673503681f86/deploy-status)](https://app.netlify.com/sites/module-federation-template-host/deploys)

**[Remote App](https://module-federation-template-remote.netlify.app)**

[![Remote App Netlify Status](https://api.netlify.com/api/v1/badges/5ba4ad1f-811d-493f-8030-92e9ba296a43/deploy-status)](https://app.netlify.com/sites/module-federation-template-remote/deploys)

A dynamic, multi-environment module federation template.

## Features

- Multi-environment support using `NormalModuleReplacementPlugin`
- Loads remote apps dynamically
- Uses shareable configs to reduce boilerplate

## Installation

Install package dependencies and link local packages together:

```bash
yarn
```

## Getting Started

Run dev environment for host and remote:

```bash
yarn dev
```

Build and serve host and remote for Netlify:

```bash
yarn build
```

**Note:** Configure script in Netlify to auto-run via push to `main` branch.

Build host and remote for Express:

```bash
yarn prod
```

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Serve host and remote for Express:

```bash
yarn serve
```

**Note**: Run `yarn prod` first.

## CI Commands

`release.yml`

Install and link packages (`release.yml`):

```bash
yarn bootstrap:ci
```

Create a conventional GitHub release:

```bash
yarn version:ci
```

## License

MIT
