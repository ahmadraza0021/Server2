// let express = require('express'); //import express module
// let app = express(); //create an instance of express OR initialize express

// app.get('/',(req, res) => { //http://localhost:4000   //only get method can run on browser not post method or others
//     res.send({status: 1, msg: "Home Page API"});
// });


// app.get('/news',(req, res) => { //http://localhost:4000/news
//     res.send({status: 1, msg: "News API"});
// });

// app.get('/about',(req, res) => { //http://localhost:4000/about
//     res.send({status: 1, msg: "About API"});
// });

// app.listen(4000); //http://localhost:4000







let express = require('express');
let app = express();
app.use(express.json()); //3methods used to bring data from client(frontend) in json(body)/query/param format

app.get('/',(req, res) => { //http://localhost:4000    //only get method can run on browser not post method or others
    res.send({status: 1, msg: "Home Page API"});
});


app.get('/news',(req, res) => { //http://localhost:4000/news
    res.send({status: 1, msg: "News API"});
});

// method 3 dynamicparms  
app.get('/news/:id',(req, res) => { //check on browser or thunder client http://localhost:4000/news/1 or http://localhost:4000/news/2 or http://localhost:4000/news/3
    console.log(req.params); // { id: '1' or '2' or '3' }
    res.send({status: 1, msg: "News API", id: req.params.id}); //id: req.params.id
});

app.get('/about',(req, res) => { //http://localhost:4000/about
    res.send({status: 1, msg: "About API"});
});

app.post('/login',(req, res) => { //http://localhost:4000/login
    //method 1 body 
    console.log(req.body);

    res.send({ //res.status(200).json()
        status: 1,
        msg: "Login API", 
        bodyData: req.body,
        queryData: req.query
    });
    //method 2 query 
    // console.log(req.query);
    // res.send(
    //     {
    //         status: 1,
    //         msg: "Login API", 
    //         // bodyData: req.body,
    //         queryData: req.query
    //     }
    // );
});
app.listen(4000); //http://localhost:4000