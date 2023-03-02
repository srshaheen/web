const mongoose = require('mongoose');

const connectDB = async (dburl) => {
    try {
     await mongoose.connect(dburl)
     console.log('db is conected');
    } catch (error) {
     console.log('db is not conected');
     console.log(error.message);
    }
    
 }

module.exports = connectDB;