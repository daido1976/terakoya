# terakoya ![Client test](https://github.com/daido1976/terakoya/workflows/Client%20test/badge.svg)

Work in progress.

## Features

- Create React App with TypeScript
- Managed UI components with storybook
- Deployed on [ZEIT Now](https://zeit.co/home)

## Development

Set environment variables to `.env` file. ( Please refer to `.env.skeleton` file. )

See. https://zeit.co/docs/v2/serverless-functions/env-and-secrets#during-local-development

```sh
$ yarn start
$ open http://localhost:3000
```

```sh
# Development UI
$ yarn storybook
```

## Release

Set environment variables described in `env` of `now.json` file to secrets with Now CLI.

See. https://zeit.co/docs/v2/serverless-functions/env-and-secrets#adding-secrets

### Staging

```sh
$ now
```

### Production

```sh
$ now --prod
```
