# webpackDev
learn from https://doc.webpack-china.org/guides/getting-started

without config file :
npx webpack src/index.js dist/bundle.js

with config file:
node_modules\.bin\webpack --config webpack.config.js

add webpact config to package.json
"scripts": {
    "build": "webpack"
  },

then run :npm run build
