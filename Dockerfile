FROM ubuntu:20.04

RUN apt-get update -yqq
RUN apt-get install -yqq openjdk-14-jre
RUN apt-get install -yqq nginx
RUN apt-get install -yqq mongodb-server

WORKDIR /root
RUN rm -rf /var/www/html
ADD frontend/build /var/www/html
ADD backend/build/libs/rest-0.0.1-SNAPSHOT.jar .
ADD nginx_server.conf /etc/nginx/sites-available/default
ADD start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]
