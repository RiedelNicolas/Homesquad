#!/bin/bash

docker build -f ./db/Dockerfile.deploy ./db -t homesquad-json-server-deploy

docker run homesquad-json-server-deploy
