# terakoya

Work in progress.

## Development

```sh
# Only client
$ yarn start

# Use Storybook
$ yarn storybook
```

or

```sh
# Use firebase emulator
# See. https://firebase.google.com/docs/functions/local-emulator
$ cd functions
$ npm run build
$ cd ..
# Emulate functions & hosting
$ firebase emulators:start
```

## Deploy

### Firebase Hosting

```sh
$ yarn build
$ firebase deploy
```

### Cloud Functions

```sh
$ cd functions
# If you have not installed yet
$ npm install
$ npm run deploy
```
