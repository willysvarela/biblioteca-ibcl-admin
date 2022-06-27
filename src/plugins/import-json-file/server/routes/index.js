module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/import',
    handler: 'importController.index',
    config: {
      policies: [],
      auth: false
    },
  },
];
