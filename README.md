
# generate-it-typescript-server-client

Server client for typescript server

By default the http lib uses got - but this lib can be changed to anything you need it to be.

  

## Description

These nunjucks templates are designed to build an api client for a typscript server.

The client is automatically built using the openapi-nodegen npm package: https://www.npmjs.com/package/openapi-nodegen

By default the http lib will pull `config.baseUrl` as the base url for all requests. You can override 'baseUrl' this with a -$ CLIENT_CONFIG_BASE_URL=<path>

#### Example:
```json

"scripts": {

"generate:nodegen:tsclient": "openapi-nodegen ./api_1.0.0.yml -o ./src/services/client -t https://github.com/acrontum/openapi-nodegen-typescript-server-client.git",

```
Override the baseUrl config path with something more specific to your api:
```json
"scripts": {

"generate:nodegen:tsclient": "openapi-nodegen ./api_1.0.0.yml -o ./src/services/client -t https://github.com/acrontum/openapi-nodegen-typescript-server-client.git -$ CLIENT_CONFIG_BASE_URL=imageServer.baseUrl",

```


## Notes
* The generated **HttpService** (located inside the `lib` folder) by default will try to import the config object from the root folder of the generated client. Feel free to change it according to where you would like it to read your app's configuration from.
