#!/bin/bash

set -e

SERVER="openhabian@192.168.1.100"
REMOTE_DIR="/var/www/alizangol"
BUILD_DIR="dist"

echo "=== Building alizangol ==="
npm run build

echo "=== Deploying to ${SERVER} ==="
rsync -av --delete \
    "${BUILD_DIR}/" \
    "${SERVER}:${REMOTE_DIR}/"

echo "=== Deployment complete ==="