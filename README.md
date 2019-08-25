# openapi-nodegen-typescript-server-client
Server client for typescript server

## Description
These nunjucks templates are designed to build an api client for a typscript server.
The client is automatically built using the openapi-nodegen npm package: https://www.npmjs.com/package/openapi-nodegen

#### Example:
```json
  "scripts": {
    "generate:nodegen:tsclient": "openapi-nodegen ./api_1.0.0.yml -o ./src/services/client -t https://github.com/acrontum/openapi-nodegen-typescript-server-client.git",
```
