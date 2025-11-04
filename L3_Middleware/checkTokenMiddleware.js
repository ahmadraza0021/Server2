
// let myToken = "12345";
let checkToken = (req, res, next) => {
    console.log(req.query.token);
    if(req.query.token =="" || req.query.token == undefined){
        return res.send({
            status: 0,
            msg: "Please fill the token",
        })
    }
    // if(req.query.token != myToken){
    if(req.query.token != process.env.myToken){
        return res.send({
            status: 0,
            msg: "Please fill the correct token",
        })
    }
    next(); //next() is used to call the next middleware or route handler
}
module.exports = {checkToken};  //named export