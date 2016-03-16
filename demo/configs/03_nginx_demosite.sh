#!/bin/bash

cp ./03_nginx.conf /etc/nginx/sites-enabled/demosite
service nginx reload
cp ./03_logstash.conf /etc/logstash/conf.d/logstash.conf
service logstash restart
