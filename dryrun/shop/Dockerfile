FROM node:22-alpine AS stage1 
WORKDIR /app 
COPY . .
RUN npm install 
RUN npm run build 

FROM nginx:alpine 
COPY --from=stage1 /app/nginx.conf /etc/nginx/
COPY --from=stage1 /app/dist/shop/browser/ /usr/share/nginx/html/
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
