const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('Db is conected'))
    .catch(err => console.log(errr));

module.exports = mongoose;