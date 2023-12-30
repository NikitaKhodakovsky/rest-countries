# REST Countries

Simple, easy-to-use application to explore information about the countries and regions of the world.

This is a solution to the [REST Countries challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

-   [Links](#links)
-   [Screenshots](#screenshots)
-   [Built with](#built-with)
-   [How to run the application](#how-to-run-the-application)
    -   [React Scripts](#react-scripts)
    -   [Docker](#docker)

## Links

-   [Live Demo](https://countries.khodakovsky.com)

## Screenshots

![list-desktop-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/2ea9db7b-4408-420f-b839-3983bfedeb2c)
![list-desktop-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/6f067d0b-c468-4e13-a5d7-032fb8e2ff1b)

![list-mobile-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/61bf0d10-af43-4a65-8a3c-705929a8133d)
![list-mobile-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/39f1cc8d-035b-45f0-966f-fc29f2a3df69)

![details-desktop-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/1c111744-d692-415f-93b4-0f871d41af14)
![details-desktop-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/94f03ca0-1d7a-441d-a929-09a58a9f37e9)

![details-mobile-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/282aace4-c28e-4749-8d4b-fc2abc883a78)
![details-mobile-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/cd51d38a-4a4f-40c0-a109-2e8084bc00e7)

## Built with

-   React
-   React Query
-   NGINX
-   Docker
-   SASS / CSS modules
-   TypeScript

## How to run the application

You can run the application using both Docker and React Scripts.

### React Scripts

Clone this repository:

```console
git clone https://github.com/NikitaKhodakovsky/rest-countries.git
```

Navigate to the directory with this repository:

```console
cd rest-countries
```

Install dependencies:

```console
npm i
```

Run the application:

```console
npm run start
```

The app is now available at http://localhost:3000

### Docker

Install [Docker](https://docs.docker.com/engine/install).

Execute this command to verify that the installation is correct:

```console
docker -v
```

You should see something like this:

```console
Docker version 24.0.7, build afdd53b
```

Clone this repository:

```console
git clone https://github.com/NikitaKhodakovsky/rest-countries.git
```

Navigate to the directory with this repository:

```console
cd rest-countries
```

Execute the following command to start the application from the docker-compose file:

```console
docker compose --env-file ./.env.example up -d
```

The app is now available at http://localhost

<br>

To stop the application run:

```console
docker compose down
```
