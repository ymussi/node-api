FROM node:14
LABEL mantainer="ymussi@gmail.com"
LABEL fileversion=v0.1

ARG RUN_ENVIRONMENT
ENV DBENV=${RUN_ENVIRONMENT}
ENV ENV=${RUN_ENVIRONMENT}
ENV TZ=America/Sao_Paulo

COPY package.json package-lock.json entrypoint.sh /app/node_api/

WORKDIR /app/node_api

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

RUN npm install --silent

RUN npm install nodemon -g --quiet

COPY . /app/node_api

RUN wget -O /bin/wait-for-it https://github.com/vishnubob/wait-for-it/raw/54d1f0bfeb6557adf8a3204455389d0901652242/wait-for-it.sh; \
    chmod +x /bin/wait-for-it

ENTRYPOINT ["/bin/sh","/app/node_api/entrypoint.sh"]
