# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

ue to time constraints the app would require the following, improvements

### Improvements
* Implement ErrorBoundary for application
* Improving test coverage
* Add e2e test

### How the app works
* On starting the application it fetches a list of trending movies with fetch limit set to 20
* A search input exist, which allows searching of gif images against the API
* The search results is gradually rendered with an infinite scroll
* Each movie detail page renders when a movie-card is clicked

### Architectural decision
* @emotion/styled with tailwind is used for UI design, twin-macro is used to combined both libraries efficiently
* react-query is used for state management due to simplicity and scalability.
* constate is a small library used to make states globally available via context
* Alternatives includes using redux-toolkit.
