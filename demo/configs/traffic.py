"""
Simple traffic emulator.

Script expect 3 positional arguments: 

    traffic.py <URL> <SLEEP> <MISSING>

Where <URL> is URL in form "http://something/", and <SLEEP> is maximum sleep
time, which will be randomly evaluated between individual requests. 
<MISSING> represent how many percentage of request should be on nonexisting
resources (we want make not only 200 status code traffic, but also some 404).

In stdint expect list of URL path which will be randomly accessed.

Script run in endless loop.


Example:
    find site -type f | sed "s|^site/||" | grep -E "\.(html|jpg|css|js|eot|svg|ttf|woff|woff2)$" | python traffic.py http://192.168.99.200:8080/ 1
"""

import random
import requests
import sys
import time

urls = sys.stdin.read().split('\n')

while True:
    if random.random() * 100 <= float(sys.argv[3]):
        path = list(random.choice(urls))
        random.shuffle(path)
        url = sys.argv[1] + ''.join(path)
    else:
        url = sys.argv[1] + random.choice(urls)
    sleep = random.random() * float(sys.argv[2])
    print url, 'sleeping for %3.1f seconds' % sleep,
    r = requests.get(url)
    print '/ status', r.status_code
    time.sleep(sleep)
