const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/';

mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
  .then(() => {
      console.log('MongoDB connected');
  })
  .catch((err) => {
      console.log(err);
  });