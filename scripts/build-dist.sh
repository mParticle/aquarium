#!/usr/bin/env bash

echo '---------- Begin dist assets ----------'
DIR=$(cd "$(dirname "$0")"; pwd)

vite build

cp $DIR/../src/styles/*.css $DIR/../dist