'use strict';
require('dotenv').config();
const port = process.env.PORT;
const server = require('./src/server');
const { sequelize } = require('./src/models/index');

sequelize.sync(
    // {force: true}
)
    .then(() => {
        server.listen(port, () => {
            console.log(`server up on port ${port}`)
        })
    })