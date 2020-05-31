#!/bin/bash
service mongodb restart
sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/sites-available/default
service nginx restart
java -jar rest-0.0.1-SNAPSHOT.jar > /dev/null

