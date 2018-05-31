const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/Todo',(err,dbObj)=>{
  if(err)
  {
    return console.log(`Connection Error ${err}`);
  }
  console.log('Connection Successful!!');

  // dbObj.db('Todo').collection('Todos').insertOne({
  //   text:'Hi',
  //   id: 'zi'
  // },(err,res)=>{
  //   if(err)
  //   {
  //     return console.log(`Error ${err}`);
  //   }
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });

  dbObj.db('Todo').collection('User').insertOne({
    name:'Zed',
    age: 21,
    loc:'sir'
  },(err,res)=>{
    if(err)
    {
      return console.log(`Error ${err}`);
    }
    console.log(JSON.stringify(res.ops,undefined,2));
  });


  dbObj.close();
});
