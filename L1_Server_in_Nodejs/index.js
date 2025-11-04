// // How to create a server & Run in Node.js
// let http = require('http'); // import http module
// let server = http.createServer((req, res) => {
//     res.end("Server is running"); // send response to client);
// });

// server.listen(8000); //http://localhost:8000   // Run in browser

// In Node.js
let http = require('http'); // import http module
let server = http.createServer((req, res) => {
    if(req.url== "/news"){ //http://localhost:8000/news  //Run in browser
        let obj = {
            status: 1,
            data: [
                {
                    newsTitle: "Adan",
                    newsDes: "Adan Hello"
                },
                {
                    newsTitle: "IIP",
                    newsDes: "IIP Hello"
                },
            ],
        };
        res.end(JSON.stringify(obj)); // send response to client);
    }
    if(req.url== "/about"){ //http://localhost:8000/about //Run in browser
        res.end("About page"); // send response to client;
    }
    if(req.url== "/course"){ //http://localhost:8000/course  //Run in browser
        res.end("Course page"); // send response to client;
    }
    if(req.url== "/"){ //http://localhost:8000  //Run in browser
        res.end("Server is running"); // send response to client);
    }
});

server.listen(8000); //http://localhost:8000