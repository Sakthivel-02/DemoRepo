const { mongo } = require('mongoose');

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://Sakthivel:hcaOx7QlcVYunsI5@customer.4stbnl8.mongodb.net/test'

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log('Connected to MongoDB!');
  // Use the database object
  db.close();
});



MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const mycollection = db.collection('mycollection');
  const mydocument = { name: 'John Doe', age: 30 };
  mycollection.insertOne(mydocument, (err, res) => {
    if (err) throw err;
    console.log('Document inserted!');
    db.close();
  });
});


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const mySchema = new mongoose.Schema({
  name: String,
  age: Number
});

const MyModel = mongoose.model('MyModel', mySchema);

const myDocument = new MyModel({ name: 'John Doe', age: 30 });
myDocument.save((err, res) => {
  if (err) throw err;
  console.log('Document saved!');
});

/*const mongoose = require('mongoose');

const connectDatabse = () => {
  mongoose.connect(process.env.DB_LOCAL_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true

  }).then(con => { console.log('mongoDB is conneted with localhost')})
}*/

module.exports = connectDatabse