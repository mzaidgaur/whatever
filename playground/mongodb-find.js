const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

mongoClient.connect('mongodb://localhost:27017/Todo',(err,dbObj)=>{
  if(err)
  {
    return console.log(`Connection Error ${err}`);
  }
  console.log('Connection Successful!!');

  // dbObj.db('Todo').collection('Todos').find({ _id: new ObjectID("5b1027bcd35f1a2047ca74d2")}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   if(err)
  //   {
  //     console.log(err);
  //   }
  // });

  dbObj.db('Todo').collection('Todos').find({ _id: new ObjectID("5b1027bcd35f1a2047ca74d2")}).count().then((count)=>{
    console.log(count);
  },(err)=>{
    if(err)
    {
      console.log(err);
    }
  });

  //dbObj.close();
});
