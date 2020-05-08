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
  *   acessiveis atraves do: const reqQuery = request.query
  * Params: Parametros para identificar recursos
  *   app.get('/users/:id', (request, response) => {
  *   http://localhost:3333/users/1
  *   acessivel atraves do: const reqParams = request.params
  * Body: Corpo da requisição para criar ou alterar recursos
  *   app.post('/users', (request, response) => {
  *   http://localhost:3333/users com body {...}
  *   acessivel atraves do: const reqBody = request.body
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL
 * NoSQL: MongoDB, CouchDB, Firebase, 
 * 
 */

/**
 * Driver: select * from users
 * Query Builder: table('users').select('*').where(
 * knexjs)
 */

     const [count] = await connection('incidents').count()
ou
    const count = await connection('incidents').count()
count[0]

cors instalado

Aula 03