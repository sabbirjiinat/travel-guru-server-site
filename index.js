const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 5000;

const category = require('./Data/category.json')
const travel = require('./Data/travel.json')


app.get('/', (req, res) => {
    res.send('Travel Guru is Running')
})

app.get('/category', (req, res) => {
    res.send(category)
    
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const findId = category.find(cd => cd.id == id)
    res.send(findId)
   
})

app.get('/travel/category/:id', (req, res) => {
    const id = req.params.id;
    const filterTravel = travel.filter(tv => tv.category_id == id)
    res.send(filterTravel)
    console.log(filterTravel);
 
})

app.listen(port, () => {
    console.log(`My travel guru server site is running at port${port}`);
  
})