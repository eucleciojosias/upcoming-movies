all: start

start:
	docker-compose up -d
	cd Frontend && make start
