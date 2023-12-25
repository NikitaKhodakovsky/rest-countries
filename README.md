# REST Countries

Simple, easy-to-use application to explore information about the countries and regions of the world.

This is a solution to the [REST Countries challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

-   [Screenshots](#screenshots)
-   [Built with](#built-with)
-   [How to run the application](#how-to-run-the-application)
    -   [React Scripts](#react-scripts)
    -   [Docker](#docker)

## Screenshots

![list-desktop-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/3e3c572d-14ff-46de-93ad-5a5040404a75)
![list-desktop-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/06740ef6-f822-4008-b49b-d8dc990729cd)

![list-mobile-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/7177a2ee-e16f-4115-9215-af2187f6362b)
![list-mobile-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/616cc781-d9bd-410f-aa72-a6feda4dc14d)

![details-desktop-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/4bd3618a-596f-439c-b0b5-3808a1d667ad)
![details-desktop-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/4198c691-36b7-4b98-99f0-ca2836f59783)

![details-mobile-dark](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/86137a62-d36b-49d7-8dd5-5f606940a8ba)
![details-mobile-light](https://github.com/NikitaKhodakovsky/rest-countries/assets/52799295/d6a52c3f-669e-4076-a550-1495224cfd20)

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
