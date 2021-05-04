import express from 'express'
import connectdb from './Db.js'
import dotenv from 'dotenv'
import products from './Data/products.js'
import colors from 'colors'

dotenv.config()

connectdb()
const app = express()
const PORT = process.env.PORT||5000;
app.get('/',(req,res)=>
{res.send(`Api is running`)})
app.get('/api/products',(req,res)=> 
{res.json(products)})
app.get('/api/products/:id',(req,res)=>
{   const product = products.find(
    (p)=>{return p._id === req.params.id}
)
    res.json(product)})


app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.italic.bold))