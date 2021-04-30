const express = require('express');
const products = require('./Data/products')
const app = express()
app.get('/',(req,res)=>
{res.send(`Api is running`)})
app.get('/api/products',(req,res)=>
{res.json(products)})
app.get('/api/products/:id',(req,res)=>
{   const product = products.find(
    (p)=>{return p._id === req.params.id}
)
    res.json(product)})
app.listen(5000,console.log(`server on port 5000`))