const mongoose = require('mongoose');

const dbconnection = () => {
  mongoose.connect('mongodb://localhost:27017/E-dom', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const database = mongoose.connection;

  database.on('error', (error: any) => {
    console.log('error in database: ', error);
  });

  database.once('connected', () => {
    console.log('Database Connected');
  });
};

export default dbconnection;
