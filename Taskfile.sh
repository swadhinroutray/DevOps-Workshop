#!/bin/bash
default() {
    start
}
install() {
    npm install --prefix api
    echo "API Packages Installed"
}
start() {
    cd api && npm run-script test
}
prod() {
    docker-compose -f docker/docker-compose.prod.yml up
}
mongo() {
    docker exec -it DevOps_DB mongo
}
redis() {
    docker exec -it DevOps_REDIS redis-cli
}
dev() {
    docker-compose -f docker/docker-compose.dev.yml up
}
down() {
    docker-compose -f docker/docker-compose.prod.yml down
}
build() {
    docker-compose -f docker/docker-compose.dev.yml build
}
"${@:-default}"
