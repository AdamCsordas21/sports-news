#!/usr/bin/env bash

version=$(date +%y%m%d_%H%M%S)

sed "s/{{VERSION}}/$version/g" ./static/index.html > ./docs/index.html
