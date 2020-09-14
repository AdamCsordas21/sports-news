#!/usr/bin/env bash

version=$(date +%y%m%d_%H%M%S)

sed "s/{{VERSION}}/$version/g" ./static/index.html > ./docs/index.html
grep '{{VERSION}}' ./docs/index.html > /dev/null
if [ "$?" -eq "0" ]; then
  echo '{{VERSION}} not replaced!'
  exit 1
fi
git add docs/index.html
