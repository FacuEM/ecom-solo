# ecom-solo
This project is an Ecommerce developed from scratch with Create React App and Firebase integrated with Stripe API.
##### Features:
- User register/login (email & password and google login) /logout
- Password recovery 
- Search by category
- Load more products on a page
- Add items to cart and persist
- Restricted access to routes if you are not logged in or admin
- Increasing the quantity of the same item in the cart
- Simulate a purchase with Stripe
- View orders and individual orders
- As admin:
  - Add products
  - Delete products




## Technologies:
- Firebase
  - Functions
  - Authentication
  - Cloud firestore
- React 
- Redux
- Express
- Sass

## Folder structure:

```
ecom-solo
├── functions 
│   ├── index.js
│   └── package.json
├── public
├── src
│   ├── /assets
│   ├── /components
│   ├── /customHooks
│   ├── /firebase
│   │   ├── config.js
│   │   └── utils.js
│   ├── /hoc
│   ├── /layouts
│   ├── /pages   
│   ├── /redux
│   │   ├── /Cart
│   │   ├── /Orders
│   │   ├── /Product
│   │   ├── /User
│   │   ├── rootReducer.js
│   │   ├── rootSaga.js
│   │   └── store.js
│   ├── /stripe
│   ├── /utils
│   ├── App.js
│   ├── default.scss
│   └── index.js
├── package.json
└── firebase.json
```
