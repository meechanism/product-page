# Products Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions

1. I was given the OK from Laura to use any framework of choice and chose React, even though the guidelines said to use `vanilla JavaScript`.

2. The prompt said to `consume the JSON of products`, so I took the liberty of copying the contents of the file as is and import it when needed.

3. The prompt said to build `the product details page with all products`, and that was a little unclear to me. I assumed it implied:

   - there is a master list of all products (a catalog page of _all products_)
   - there are individual product pages featuring a hero image (the _details page_)

   It seemed more realistic to have a product catalog page that would link to individual product detail pages when a product is clicked. Because of that, I created two primary pages for this mini app.

4. I assume the visual references were provided as ideas/inspiration to work off as a starting point and not mocks to be reproduced.

## Notable implementation details

- Component based UI ([atomic](https://bradfrost.com/blog/post/atomic-web-design/) + declarative)
- Responsive product catalog page
- Responsive product details page
- Responsive modal lightbox dialog for product Quicklook
- Handles fake/invalid product ids (ex: http://localhost:3000/details/fake-product-id)
- Basic written tests + snapshots for pages, components, and utilities (see below for instructions to run)

## Other side notes

There are non-functional UI elements used to fill in the gaps to make the page look like an e-commerce website (eg: sugar). For example, the links in the primary navigation, footer, and add to cart button.

# Get started

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
