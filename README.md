# lifeoftext

Text based adventure game

[![CircleCI](https://circleci.com/gh/JakeSidSmith/lifeoftext.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/lifeoftext)

## Contributing

Clone the repository.

Make sure you are using the correct versions of node.js (>=12.6) and npm (>=6.10).

If you have nvm installed you can run the following to use the correct node version:

```shell
nvm i && nvm use
```

To ensure you are using the correct version of npm you can then run:

```shell
npm i npm@6.10 -g
```

Run the following to install dependencies:

```shell
npm ci
```

Now you can run a server with live reload using the following:

```shell
npm start
```

To run the tests:

```shell
npm test
```

To fix prettier errors:

```shell
npm run prettier
```

To fix (some) tslint errors:

```
npm run lint -- --fix
```

To run a complete build:

```
npm run dist
```
