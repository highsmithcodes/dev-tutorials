const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db-api.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});