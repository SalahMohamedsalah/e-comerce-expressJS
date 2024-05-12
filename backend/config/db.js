require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://hemasaed202239:gTMdrD5FdOFVnD9Q@cluster0.xy4rqmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connection SUCCESS');
  }) 
  .catch((error) => {
    console.error('MongoDB connection FAIL:', error.message);
    process.exit(1);
  });
};
module.exports = { connectDB };

