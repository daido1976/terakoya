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
$ yarn build
# Use firebase emulator
# See. https://firebase.google.com/docs/functions/local-emulator
$ cd functions

# if want you emulate only functions, following command execute tsc & serve
# $ npm run serve

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
