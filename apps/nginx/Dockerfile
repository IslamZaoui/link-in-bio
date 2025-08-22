FROM nginx:alpine
COPY ./apps/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 48273/tcp
CMD ["nginx", "-g", "daemon off;"]