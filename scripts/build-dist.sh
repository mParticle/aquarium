#!/usr/bin/env bash

echo '---------- Begin dist assets ----------'
DIR=$(cd "$(dirname "$0")"; pwd)

vite build
npm run tokens-to-css
cp $DIR/../src/styles/*.css $DIR/../dist
cp $DIR/../src/styles/style.ts $DIR/../dist