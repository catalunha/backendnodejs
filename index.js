// import express from 'express'
const express = require('express')

const app = express()
app.use(express.json())
/**
 * Metodos HTTP
 *  GET: Buscar/listar
 *  POST: Criar
 *  PUT: Alterar
 *  DELETE: Deletar
 */

 /**
  * Tipos de parametros
  * Query: Parametros nomeados enviados na rota após o '?' (filtros, paginacao, ) unidos com '&'. 
  *   app.get('/users', (request, response) => {
  *   http://localhost:3333/users?name=joao&qde=10
  *   acessiveis atraves do: request.query
  * Params: Parametros para identificar recursos
  *   app.get('/users/:id', (request, response) => {
  *   http://localhost:3333/users/1
  * Body: Corpo da requisição para criar ou alterar recursos
  *   app.post('/users', (request, response) => {
  *   http://localhost:3333/users com body {...}
  */
app.get('/users', (request, response) => {
  const reqQuery = request.query // http://localhost:3333/users?name=joao&qde=10
  console.log(reqQuery)
  // return response.send('Hello Word')
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Prof Catalunha',
  })
})
app.get('/users/:id', (request, response) => {
  const reqParams = request.params // http://localhost:3333/users/1
  console.log(reqParams)
  // return response.send('Hello Word')
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Prof Catalunha',
  })
})
app.post('/users', (request, response) => {
  const reqBody = request.body // 
  console.log(reqBody)
  // return response.send('Hello Word')
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Prof Catalunha',
  })
})
app.listen(3333)

