FROM nginx

RUN apt-get update && \
	apt-get dist-upgrade -y && \
	apt-get install -y sudo curl apt-transport-https

RUN echo 'deb https://deb.nodesource.com/node_5.x jessie main' > /etc/apt/sources.list.d/nodesource.list && \
	curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
	apt-get update && \
	apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g bower gulp yeo

WORKDIR .

RUN npm install && \
	bower install

RUN gulp build

COPY dist /usr/share/nginx/html
