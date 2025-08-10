//install prettyprint extension on browser to see the output in a better way
// Modules in Node.js
// const addToCart = require('./cartModule.js') // default import
const {addToCart, changeQty, name} = require('./cartModule.js') // named import

//before nodemon in terminal we will run this command to run the file => node index.js
// install nodemon globally
// npm install -g nodemon

//after installing nodemon we will run this command to run the file => nodemon index  after that we will not need to run the file again and again then we set nodemon index in package.json as script => "start": "nodemon index" now run command in terminal => npm start


// console.log("Hello, World!");
// console.log("This is a test.");
// console.log(5*5);

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((value, index) => {
//     console.log(value, index);
// });

console.log(addToCart()); // This will call the function from cartModule.js and return "Add to Cart"
console.log(changeQty()); // This will call the function from cartModule.js and return 5
console.log(name); // This will print the variable name from cartModule.js
console.log("welcome");