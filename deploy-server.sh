#!/bin/bash

sudo docker build -f ./db/Dockerfile.deploy ./db -t homesquad-json-server-deploy

sudo docker run homesquad-json-server-deploy
