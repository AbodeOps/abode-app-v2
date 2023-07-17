FROM node:lts-alpine AS build

WORKDIR /app
COPY package.json ./
RUN  npm install --force
COPY . .
RUN npm run build



#STEP 2 CREATE NGINX SERVER
FROM nginx:1.25.0-alpine AS production-stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
