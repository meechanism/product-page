# Products Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notable implementation details

- Component based UI
- 3 break points for product list component
- Handles fake/invalid product ids. Ex: http://localhost:3000/details/fake-product-id

## Get started

1. Get a copy of the project (clone on github).
2. Install all dependencies:
   ```sh
   $ npm i
   ```
3. In the project directory, run:

   ```sh
   $ npm start
   ```

   This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Tests

To run tests:

```sh
$ npm test
```

The test runner will be launched with the interactive watch mode.

## Build (for deployment)

```sh
$ npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
