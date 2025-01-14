// this way wont work [because i have a parameter (3) in the function square where i called it as a param in the route number]
// module.exports = (req, res, next) => {
//     req.number = n * n;
//     next();
// }


// we use this if we have parameters in the middleware 
// function square(n) {
//     return (req, res, next) => {
//         req.number = n * n;
//         next();
//     }
// }
// module.exports = square;

// if we don't need to read parameters from the middleware and we need to read the "req.params" from the route 
// function square() {
//     return (req, res, next) => {
//         req.number = req.params.id * req.params.id;
//         next();
//     }
// }
// module.exports = square;

// if we don't need any parameters from the middleware and need to read the "req.params" and don't want to use () in the middleware name in the route you can use this 

// module.exports = (req, res, next) => {
//     req.number = req.params.id * req.params.id;
//     next();
// }


function square(n) {
    return (req, res, next) => {
        if (typeof n == "number") {
            req.number = n * n;
            next();
        } else {
            next(`this is not a number ${n}`); // next cant take anything inside it , if so it will throw an error
        }
    }
}

module.exports = square;