#!/bin/bash
cd "$(dirname "$0")"
git pull
yarn
yarn start scrape &>> /tmp/scrape.log
sleep 150
yarn start details &>> /tmp/details.log
