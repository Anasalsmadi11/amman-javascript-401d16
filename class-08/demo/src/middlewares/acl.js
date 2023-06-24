'use strict';

module.exports = (capability) => {
    //delete
    return (req, res, next) => {
        // try {
        // ['read', 'create', 'update', 'delete']

        // "capabilities": [
        //     "read",
        //     "create"
        //   ]
        console.log("===========")
        console.log(req.user)
        if (req.user.capabilities.includes(capability)) {
            next()
        } else {
            next('access denied')
        }

        // } catch (e) {
        //     next('invalid login')
        // }

    }
}