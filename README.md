# OpenAI Realtime Console

[![Netlify Status](https://api.netlify.com/api/v1/badges/74baa0ba-d71f-4445-aed7-f81422649fef/deploy-status)](https://app.netlify.com/sites/ornate-syrniki-409dc5/deploys)

[Demo site](speak-with-moby.netlify.app)

The OpenAI Realtime Console is intended as an inspector and interactive API reference
for the OpenAI Realtime API. It comes packaged with two utility libraries,
[openai/openai-realtime-api-beta](https://github.com/openai/openai-realtime-api-beta)
that acts as a **Reference Client** (for browser and Node.js) and
[`/src/lib/wavtools`](./src/lib/wavtools) which allows for simple audio
management in the browser.

## Starting the console

This is a React project created using `create-react-app` that is bundled via Webpack.
Install it by extracting the contents of this package and using;

```shell
$ npm i
```

Start your server with:

```shell
$ npm start
```

It should be available via `localhost:3000`