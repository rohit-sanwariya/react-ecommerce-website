const express = require('express');
const products = require('./Data/products')
const dotenv = require('dotenv')


dotenv.config()

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

PORT = process.env.PORT||5000;
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`))