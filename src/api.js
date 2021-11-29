const express = require('express')
const cors = require('cors')
const phones = require('./data.json')
const {
  CustomErrorTypes,
  errorFactory,
  tagError,
  handleHttpError
} = require('error-handler-module')

const badRequest = errorFactory(CustomErrorTypes.BAD_REQUEST)

const getPhone = (id) =>{
  const phone = phones.find((phone) => phone.id === Number(id))
  return Promise.resolve(phone)
}

const server = express()               

const port = process.env.PORT || 5000

server.use(cors())

server.get('/phones/:id', async (req, res, next) => {
  try{
    const phone = await getPhone(req.params.id)
    if (!phone) throw badRequest('ID not found')
    return res.json(phone)
  }catch(error){
    return next(tagError(error))
  }
})

server.get('/phones', (req, res) => {
  return res.json(phones)  
})

server.use(handleHttpError)

server.listen(port, () => console.log(`Runnning on port ${port}`))
