## UI project for a bookstore application
This application fetches data from api endpoint which must be running on http://localhost:5000.<br>
Link to [bookstore-nestjs-api](https://github.com/ashu66867/bookstore-nestjs-api) for api endpoints for the same.

### Active functionality
1. Home page: Add any item to cart.
2. Cart page:<br>
   2.1. Remove any item from cart.<br>
   2.2. Increment, decrement item count from cart.<br>
   2.3. Remove all items from cart.<br>
3. Checkout page: Redirect to home page and clear cart for another shopping session.
4. On every cart function: Calculate the follwing:<br>
   4.1. Number of items in cart.<br>
   4.2. Total cost of all items in cart.<br>

### Approach
This app uses redux to manage a global store.<br>
Redux.js.org recommends splitting up the reducer based on the features. <br>
The Redux code for a particular feature is usually written as a single file, known as a "slice".<br>

So, all the redux code for cart feature is in 'src/features/CartSlice.js'. CartSlice global state below:
```
{
    books: [],       // all books- fetches data when the app loads for the first time only
    cartItems: [],   // info of books in cart
    totalItems: 0,   // total number of books in cart
    totalBill: 0,    // total cost of cart items
    isLoading: true, // helpful to render books when data is loaded
}
```
Components use 'useSelector' hook to access info from store.<br>
Components use 'useDispatch' hook to dispatch actions like addToCart, clearCart, etc.<br>


### Testing Approach
React testing-library & Jest have been used for testing.<br>
Unit tests for components, pages & reducers are placed in 'src/tests'.<br>
Integration tests will be added in the future based on the best practices and avoiding implementation detail.<br>

<br><br>

### To intsall all the required dependecies

```
npm install
```

### Start the project

```
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Test the application

```
npm test
```

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build application

```
npm run build
```

Builds the app for production to the `build` folder.<br>


### Added dependencies
```
redux, react-redux, redux-toolkit // for managing store, slice and reducers. Based on the latest recommendation by redux team.
```

```
react-router-dom // for routing
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
