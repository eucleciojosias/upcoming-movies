FROM ubuntu:18.04

ENV LC_ALL=C
ENV LANG en_US.UTF-8
ENV LANG_ALL en_US.UTF-8

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data

RUN apt update && apt -y install apt-transport-https software-properties-common vim curl sudo

RUN sudo add-apt-repository ppa:ondrej/php \
    && apt update \
    && apt -y install php7.3 \
    php7.3-fpm \
    php7.3-json \
    php7.3-pdo \
    php7.3-mysql \
    php7.3-zip \
    php7.3-mbstring \
    php7.3-curl \
    php7.3-xml \
    php7.3-bcmath \
    php7.3-json

RUN sudo add-apt-repository ppa:ondrej/apache2 \
    && apt-get update \
    && apt-get install -y apache2 libapache2-mod-php7.3 \
    && a2enmod headers \
    && a2enmod rewrite \
    && apt-get -y autoremove

VOLUME [ "/umwapp" ]
WORKDIR /umwapp

EXPOSE 80

ENTRYPOINT [ "/usr/sbin/apache2" ]
CMD ["-D", "FOREGROUND"]
