function getAgent(req, res, next) {
    req.browser = req.headers["user-agent"]; //here headers is a built in method and  the req.headers gives you an obj and one of its properties is user-agent so we access it
    req.myName = "anas alsmadi";
    next();
}

module.exports = getAgent;