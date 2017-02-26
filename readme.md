# Adopt-Server

## Descripcion

Node version of [Adopeitor-server](https://github.com/smarbos/adopteitor-server)

## Scripts

* npm run start: Start api/app.js with node.
* npm run dev: Start api/app.js with nodemon. (watch mode)
* npm run test: Run Jasmine test's in tests folder.
* npm run eslint: Run javascript linting.

## Environment Variables

You must place a .env file in the root folder of the project with this format:

    DB_HOST=
    DB_USER=
    DB_PASS=
    DB_DATABASE=
    ENV_NAME=
    ENV_PORT=
    TABLE_ANIMALS=
    TABLE_ANIMAL_PHOTOS=

## Tech Specs:
* Node v7.5.0
* NPM v4.1.2
* Mysql V14.14
