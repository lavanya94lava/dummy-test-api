const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api_test_ninjas',{
    
});


const db = mongoose.connection;


db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to the Database:: api_test_ninjas');
});

module.exports = db;
