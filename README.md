# Nuvolum Assessment

## Tech Stack
1. HTML
2. CSS
3. JavaScript

## Frameworks and Libraries
1. React
2. Bootsrap
3. Font-Awesome

## API's

### Get all products
``` javascript
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
```

### Get a single product
``` javascript
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
```
