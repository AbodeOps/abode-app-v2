FROM node:20.4.0 AS build

WORKDIR /app
COPY package.json ./
RUN  npm install --force
COPY . .
RUN npm run build



#STEP 2 CREATE NGINX SERVER
FROM nginx:1.25.0-alpine AS production-stage

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom nginx.conf to the container
COPY nginx.conf /etc/nginx/conf.d/

COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
