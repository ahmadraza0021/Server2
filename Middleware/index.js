let express = require('express');
require('dotenv').config(); //importing dotenv to use environment variables
const { checkToken } = require('./checkTokenMiddleware'); //importing middleware from checkTokenMiddleware.js

let app = express();
// console.log(process.env.myToken); //accessing environment variable from .env file
app.use(express.json()); //3methods used to bring data from client(frontend) in json(body)/query/param format

//Middleware
// let checkToken = (req, res, next) => {
//     console.log("Middleware called");
//     next(); //next() is used to call the next middleware or route handler
// }
// app.use(checkToken); //Middleware => this middleware will be called for all the routes


// let mypass = "12345";
// let myToken = "12345";
// let CheckToken = (req, res, next) => {
//     console.log(req.query.token);
//     if(req.query.token =="" || req.query.token == undefined){
//         return res.send({
//             status: 0,
//             msg: "Please fill the token",
//         })
//     }
//     if(req.query.token != myToken){
//         return res.send({
//             status: 0,
//             msg: "Please fill the correct token",
//         })
//     }
//     next(); //next() is used to call the next middleware or route handler
// }
// app.use(CheckToken); //Middleware => this middleware will be called for all the routes

// app.use((req, res, next) => {
//         console.log(req.query.pass);
//         if(req.query.pass =="" || req.query.pass == undefined){
//             return res.send({
//                 status: 0,
//                 msg: "Please fill the password",
//             })
//         }
//         if(req.query.pass != mypass){
//             return res.send({
//                 status: 0,
//                 msg: "Please fill the correct password",
//             })
//         }
//         next(); //next() is used to call the next middleware or route handler
//     }
// );

// Router level middleware
app.get('/',(req, res) => { //http://localhost:4000    //only get method can run on browser not post method or others
    res.send({status: 1, msg: "Home Page API"});
});

//Router level middleware
app.get('/news',checkToken,(req, res) => { //http://localhost:4000/news
    res.send({status: 1, msg: "News API"});
});

// method 3 dynamicparms  
app.get('/news/:id',(req, res) => { //check on browser or thunder client http://localhost:8000/news/1 or http://localhost:8000/news/2 or http://localhost:8000/news/3
    console.log(req.params); // { id: '1' or '2' or '3' }
    res.send({status: 1, msg: "News API", id: req.params.id});
});

app.get('/about',(req, res) => { //http://localhost:4000/about
    res.send({status: 1, msg: "About API"});
});

app.post('/login',(req, res) => { //http://localhost:4000/about
    //method 1 body 
    console.log(req.body);

    res.status(200).json({
        status: 1,
        msg: "Login API", 
        bodyData: req.body,
        queryData: req.query
    });
    // //method 2 query 
    // console.log(req.query);
    // res.send(
    //     {
    //         status: 1,
    //         msg: "Login API", 
    //         bodyData: req.body,
    //         queryData: req.query
    //     }
    // );
});
// app.listen(4000); //http://localhost:4000
//after making .env file
app.listen(process.env.PORT || 5000) 