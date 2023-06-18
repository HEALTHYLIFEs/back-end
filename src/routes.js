const {
  getAllArtikelHandler,
  getBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/artikel',
    handler: getAllArtikelHandler,
  },
  {
    method: 'GET',
    path: '/artikel/{id}',
    handler: getBookByIdHandler,
  },
];

module.exports = routes;
