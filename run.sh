#!/usr/bin/env bash

source _include.sh

if [[ "$1" == "prod" ]]; then
  npm start --production
else
  if [[ "$OSTYPE" != "msys" ]]; then # windows
    $REPO_DIR/lib/kill.sh "nodemon"
  fi
  npm start
fi
