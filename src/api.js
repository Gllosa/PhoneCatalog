const express = require('express')
const cors = require('cors')
const phones = require('./data.json')


const getPhone = (id) =>{
  const phone = phones.find((phone) => phone.id === Number(id))
  return phone ? Promise.resolve(phone) : null
}

const server = express()               

const port = process.env.PORT || 5000

server.use(cors())

server.get('/phones/:id', async (req, res) => {
  const phone = await getPhone(req.params.id)
  return res.json(phone)
})

server.get('/phones', (req, res) => {
  return res.json(phones)  
})


server.listen(port, () => console.log(`Runnning on port ${port}`))
