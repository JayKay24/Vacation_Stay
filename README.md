# Vacation Stay
This is a React + Vite application that consumes these endpoints:

* https://laara-api-dev-3rc4fb3npa-ew.a.run.app/search/stays/<ID HERE>
* https://laara-api-dev-3rc4fb3npa-ew.a.run.app/search/stays/filtered

## Dependencies
* [Docker](https://www.docker.com/)
* [Node22](https://nodejs.org/en)

## Running it locally

The above prerequisite dependencies are mandatory. If you already have Docker installed, no need to install Node22(However, you might need it to run tests locally).

To run the application locally, follow these steps:
1. `$ git clone https://github.com/JayKay24/Vacation_Stay.git`
2. `$ cd Vacation_Stay`
3. Make sure docker is up & running
4. `$ docker build -t <YOUR_PREFERRED_IMAGE_USERNAME>/<YOUR_PREFERRED_APP_NAME>:1.0.0 .`

## Running Tests Locally

```
$ npm run test
```