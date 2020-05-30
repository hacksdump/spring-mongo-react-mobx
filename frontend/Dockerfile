FROM ubuntu:18.04

MAINTAINER Harshit Maurya <hmaurya999@gmail.com>

ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 12.17.0

RUN apt-get -yqq update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get -yqq install curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

ADD . /opt/frontend
WORKDIR /opt/frontend

RUN apt-get install -yqq gnupg2
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install --no-install-recommends yarn
RUN yarn install
RUN yarn build

RUN apt-get install nginx
RUN ln -s build /var/www

EXPOSE 80
