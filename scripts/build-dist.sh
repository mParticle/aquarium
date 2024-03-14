#!/usr/bin/env bash

echo '---------- Begin dist assets ----------'
DIR=$(cd "$(dirname "$0")"; pwd)

npm run tokens-to-css
vite build
cp $DIR/../src/styles/style.* $DIR/../dist