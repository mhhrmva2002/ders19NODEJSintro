const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
const PORT = 8080


const fakeData=[{
    id: 1,
    name: 'John',
    email: 'tugrp@example.com',
    address: '123 Fake Street'
},
{
    id: 2,
    name: 'cola',
   price: '2'
},
{
    id: 3,
    name: 'sprite',
   price: '3'
},
{
    id:4,
    name: 'cappy',
   price: '4'
}]
//get all products
app.get('/products', (req, res) => {
if(fakeData.length===0){
    res.status(204).send('no comment');
    return;
}
else{
    res.status(200).send(fakeData);
    return;
}
})
//get product by id
app.get('/products/:id', (req, res) => {
    const id=req.params.id;
    const singleData=fakeData.find((data)=>data.id===parseInt(id));
    if(singleData===undefined){
        res.status(404).send('data not found 404')
    }
    else{
        res.status(200).send(singleData)
    }
})  

//delete product by id
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const data = fakeData.find((data) => data.id === parseInt(id));
    if (data === undefined) {
      res.status(404).send("no such product found!");
      return;
    } else {
      const idx = fakeData.indexOf(data);
      fakeData.splice(idx, 1);
      res.status(202).send("product deleted successfully!");
    }
  });

  //post product
app.post("/products", (req, res) => {
    const newProduct = {
      id: ID,
      name: req.body.name,
      price: req.body.price
    } 
    fakeData.push(newProduct);
    ID++;
    res.status(201).send("data posted successfully");
  });
  

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})