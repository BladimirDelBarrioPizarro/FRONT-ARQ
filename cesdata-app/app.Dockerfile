# ------------------------------------------------------
# Production Build
# ------------------------------------------------------

FROM mi:nginx
EXPOSE 8080
COPY build/ /usr/share/nginx/html