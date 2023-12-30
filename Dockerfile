FROM node:20.10.0-alpine AS build 

WORKDIR /app 

COPY package*.json .npmrc ./

RUN npm i

COPY . .

RUN npm run build 

FROM nginx:1.25.3-alpine AS production 

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
