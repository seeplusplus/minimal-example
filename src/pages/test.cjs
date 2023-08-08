const { MongoClient } = require('mongodb');
module.exports = {
    test: () => {
        console.log(MongoClient);
    }
}