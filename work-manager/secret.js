module.exports = {
    limit: {
        api: {
            windowMs: 60 * 60 * 1000, //1 hour
            max: 150, //150 requests
        }
    },
    session: {
        secret: 'Work-Manager-Mongodb_Security_Secret', //secret for app session
        name: 'Work-Manager-Node-Mongodb', //name of the app session
        ttl: 30 * 24 * 60 * 60, //store sessions for a month,
        touchAfter: 24 * 3600 //re-save sessions every 24 hours
    },
    superSecret: 'Work-Manager-Node-Mongodb_Super_Secret_Security_Secret'
};