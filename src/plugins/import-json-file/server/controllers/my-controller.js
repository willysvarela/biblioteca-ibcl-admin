'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('import-json-file')
      .service('myService')
      .getWelcomeMessage();
  },
};
