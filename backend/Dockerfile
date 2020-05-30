FROM ubuntu:20.04

MAINTAINER Harshit Maurya <hmaurya999@gmail.com>

RUN apt-get -yqq update
RUN apt-get install -yqq openjdk-14-jdk
ADD . /opt/api
WORKDIR /opt/api
RUN ./gradlew build -x test
EXPOSE 8080

CMD [ "./gradlew", "run" ]
