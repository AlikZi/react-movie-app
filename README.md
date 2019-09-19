# React Movie App

It is a Single Page Application built with React and Redux that gives the user an opportunity to see the most popular movies at the moment. User can view more information about the movie and watch the trailer, when he/she clicks on the movie poster. The movie list and movie information is fetched from the [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) using API requests. The app is fully responsive and mobile friendly.

## Screenshots

First thing what user will see is a movie list of most popular movies.

![Image of Main page](screenshots/movieList.png)

User can view more information and watch movie trailers:

![Image of Movie Overview](screenshots/movieOverview.png)

## Tech

React Movie App uses a number of open source projects to work properly:

* [React](https://reactjs.org) - a JavaScript library for building user interfaces
* [Redux](https://redux.js.org) - a predictable state container for JavaScript apps
* [Webpack](https://webpack.js.org) - a static module bundler for modern JavaScript applications
* [Babel](https://babeljs.io) - a JavaScript compiler
* [Sass](https://sass-lang.com) - Sass helps keep large stylesheets well-organized
* [Jest](https://jestjs.io) - a javascript testing framework

## Installation

React Movie App requires [Node.js](https://nodejs.org/) to run.

Either download or clone the repo [react-movie-app](https://github.com/AlikZi/react-movie-app).
After that install the dependencies and devDependencies and start the server.
```sh
$ cd react-movie-app
$ npm install
$ npm start
```
Verify that the app is running. Go to your preferred browser and type into the url address bar:
```sh
localhost:8080
```
or
```sh
127.0.0.1:8080
```
Now, you are serving the app from your computer.

## Tests

[Jest](https://jestjs.io) and [Enzyme](https://airbnb.io/enzyme/docs/guides/jest.html) are used to test components, action and reducer.

To run tests:
```sh
$ npm run test
```

## Future implementations

It is generally not considered a good practice to keep your API key in the Github. A better practice would be to set it as an environment variable and have your server read it out of the environment. If this were a production project, I would definitely set it as an environment variable.


## License

[MIT](License.md) Alex Zonis