#!/bin/bash
containers=`docker ps -a | grep payments-frontend`

if [ -n "$containers" ]; then
  docker rm -f payments-frontend
fi

cd ..
docker build -t payments-frontend .
docker run -d -p 9441:80 --name payments-frontend payments-frontend


