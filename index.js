const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const users = require('./routes/users')
const products = require('./routes/products')


app.use(cors());
app.use(bodyParser.json());


app.use(express.static('frontEndBuild'))
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/users', users)
app.use('/products', products)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})