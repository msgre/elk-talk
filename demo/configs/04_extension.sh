#!/bin/bash

cp ./04_logstash.conf /etc/logstash/conf.d/logstash.conf
cp ./04_extension_pattern /etc/logstash/patterns/extension
service logstash restart
