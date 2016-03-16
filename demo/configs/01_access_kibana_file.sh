#!/bin/bash

usermod -a -G adm logstash
sed -i -- 's/LS_GROUP=logstash/LS_GROUP=adm/g' /etc/init.d/logstash
cp ./01_logstash.conf /etc/logstash/conf.d/logstash.conf
service logstash restart
