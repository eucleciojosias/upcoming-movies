## Upcoming Movies Web App Project

### FUNCTIONAL REQUIREMENTS

The first release of the app will be very limited in scope, but will serve as the foundation for
future releases. It's expected that user will be able to:

- See a list of upcoming movies - including the movies' name, poster or backdrop image,
genre and release date. The list should not be limited to only the first 20 movies as
returned by the API.
- Select a specific movie to see its details (name, poster image, genre, overview and
release date).
- Search for movies by entering a partial or full movie name.

### Development process and technologies used

- To feed my web page, I had to create an API layer on backend to get data from TMDb API. This approach also let the project prepared to future improvements, like data caching, third-part integrations, data format, etc.
- The backend application is quite simple: an request is made to endpoint (with params, if necessary), the endpoint returns a json response
- The frontend application consists in a page that lists the upcoming movies from backend API. This page get and list more movies when the user scroll to page bottom. Other page to show the movie details when a movie is chosen in the list
- Since I chose to create a backend in PHP, I also build a Docker image to run PHP 7.3 with Apache 2
- To make the development easier I use Makefile to builds and repetitive commands
- The microframework Zend Expressive was used to make the API because it's an easy and fast way to run microservices, with endpoints configured and a modular architecture
- PHPUnit to run unit tests to validate the API handlers
- PHP Codesniffer that detect violations to coding style with PHPCS and auto-correct with PHPBF
- Reacjs library was chosen to run the frontend application, since it's a reference to work with web components
- React router to navigate between pages
- Axios to make XMLHttpRequests
- Jest Dom lib to run tests to validate components
- Eslint to validate and fix javascript syntax

### To build and run
#### Docker image (not needed, the image is available on Dockerhub)
```
cd Docker/webserver
make
# or
docker build . -t eucleciojosias/umwapp_webserver
```

#### To build Backend
You must have `PHP >= 7.3` and `composer` as a global command
```
cd Backend/
composer install
```
To run tests: `composer test`

To run PHPCS/PHPBF: `composer check`

#### To build Frontend
**You have to to point the fake domain to localhost at your** `/etc/hosts`**:**
```
127.0.0.1   umwapp.api
```
**Or change the file** `Frontend/envs/.development` **to** `REACT_APP_API_URL=http://localhost` **and** `ServerAlias` **in the file** `Backend/config/apache.dev.conf` **to** `localhost`

You must have `yarn` or `npm` installed
```
cd Frontend/
make install
# or
yarn install
# or
npm install
```

To run eslint: `make lint` or `./node_modules/.bin/eslint ./src`

To test: `yarn test` or `npm test`

#### To start project
**Important: check if your port `80` is not already in use**
```
make start
# or
docker-compose up -d
cat envs/.development > .env
./node_modules/react-scripts/bin/react-scripts.js start
```

Go to http://localhost:3000
