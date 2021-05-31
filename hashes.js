// requires
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const log = require('./logger');

setInterval(() => {

    var id = crypto.randomBytes(20).toString('hex');

        log(`${JSON.stringify(id)}\n`)

}, 0)
