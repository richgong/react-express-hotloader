#!/usr/bin/env bash

set -veo pipefail # return exit code of failure, if anything fails

sudo npm install --production
npm run build

echo "=== Install completed at: `date`"
