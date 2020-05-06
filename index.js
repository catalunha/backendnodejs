// import express from 'express'
const express = require('express')

const app = express()

app.get('/', (request, response) => {
  // return response.send('Hello Word')
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Prof Catalunha',
  })
})

app.listen(3333)

