const express = require('express')
const routes = express.Router()


routes.get('/users', (request, response) => {
  const reqQuery = request.query // http://localhost:3333/users?name=joao&qde=10
  console.log(reqQuery)
  // return response.send('Hello Word')
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Prof Catalunha',
  })
})
routes.get('/users/:id', (request, response) => {
  const reqParams = request.params // http://localhost:3333/users/1
  console.log(reqParams)
  // return response.send('Hello Word')
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Prof Catalunha',
  })
})
routes.post('/users', (request, response) => {
  const reqBody = request.body // 
  console.log(reqBody)
  // return response.send('Hello Word')
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Prof Catalunha.',
  })
})

module.exports = routes