# terakoya

Work in progress.

## Development

```
# Only client
$ yarn start
```

or

```
# Use firebase emulator
# https://firebase.google.com/docs/functions/local-emulator
$ cd functions
$ npm run build
$ cd ..
$ firebase emulators:start
```

## Deploy

### Firebase Hosting

```
$ yarn build
$ firebase deploy
```

### Cloud Functions

```
$ cd functions
# If you have not installed yet
$ npm install
$ npm run deploy
```
