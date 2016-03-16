#!/bin/bash

cp ./02_logstash.conf /etc/logstash/conf.d/logstash.conf
service logstash restart
