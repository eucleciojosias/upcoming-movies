all: install start

install:
	touch .env
	yarn install

start:
	cat envs/.development > .env
	./node_modules/react-scripts/bin/react-scripts.js start

lint:
	./node_modules/.bin/eslint ./src
