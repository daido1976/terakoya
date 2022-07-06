# terakoya

![Client test](https://github.com/daido1976/terakoya/workflows/Client%20test/badge.svg)

## Features

- Create React App with TypeScript
- Managed UI components with storybook
- Deployed on [Vercel](https://vercel.com/home)

## Development

Set environment variables to `.env` file. (Refer to `.env.skeleton`)

See. https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables

```sh
$ yarn start
$ open http://localhost:3000
```

```sh
# Development UI
$ yarn storybook
```

## Release

Set environment variables described in `env` of `vercel.json` file to secrets with Vercel CLI.

See. https://vercel.com/docs/concepts/projects/environment-variables#adding-secrets

### Staging

```sh
$ vercel
```

### Production

```sh
$ vercel --prod
```
