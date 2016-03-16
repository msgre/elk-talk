#!/bin/bash

SLEEP=$1
SLEEP=${SLEEP:="1"}

MISSING=$2
MISSING=${MISSING:="10"}

find site -type f | sed "s|^site/||" | grep -E "\.(html|jpg|css|js|eot|svg|ttf|woff|woff2)$" | python traffic.py http://192.168.99.200:8080/ $SLEEP $MISSING
