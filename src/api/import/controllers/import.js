const fs = require("fs");


module.exports = {
    async import(ctx) {
        const file = ctx.request.files.file;
        const textFile = fs.readFileSync(file.path, 'utf-8');
        const books = JSON.parse(textFile);
        const result = await strapi.service("api::import.import").import(books);
        return {result}
    }
}