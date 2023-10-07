const express = require('express');
// const { cond } = require('lodash');
 const { MongoClient } = require('mongodb');
 //const MongoClient=require('mongodb').MongoClient

const app = express();


const url = 'mongodb://ecomUser:secret@127.0.0.1:27017/ecom'; // MongoDB connection URI
let db;

 (async () => {
     const client = await MongoClient.connect(url);
     db = client.db('ecom')
 })()
// MongoClient.connect(url,(error,client)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log('connected')
//     db=client.db('ecom')

// })


app.get('/', async (req, res) => {
     const data = await db.collection('products').find().toArray()
     res.send(data)
    // db.collection('products').find().toArray( function(error,result){

    //     if(error){
    //         console.log(error)
    //     }
    //     res.send(result)

    // })
  

});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
