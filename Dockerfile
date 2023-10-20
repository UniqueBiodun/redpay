# build environment
FROM node:16.17.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
RUN apk update && \
    apk upgrade && \
    apk add git
RUN yarn 
#RUN yarn add react-scripts@3.4.0 -g 
COPY . /app
#RUN ls -la /app && cat /app/.env
#RUN yarn add babel-jest@26.6.0
RUN yarn build

# production environment
FROM nginx:1.21.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]