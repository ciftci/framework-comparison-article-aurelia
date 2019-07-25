# `framework-comparison-article-aurelia`

This repo and its [live demo](https://ciftci-aurelia.web.app/) are published as part of the corresponding blog article at https://www.toptal.com/javascript/whats-better-than-vue-js-react-angular

Visit https://www.toptal.com/blog and subscribe to our newsletter to read great posts!

* * *

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

First, you need to install aurelia-cli if not installed:

```
    npm i aurelia-cli -g
```

Then you need to install the npm packages:

```
    npm install
```

## Run dev app

Run `au run`, then open `http://localhost:8080`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To enable Webpack Bundle Analyzer, do `au run --analyze`.

To enable hot module reload, do `au run --hmr`.

## Build for production

Run `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
