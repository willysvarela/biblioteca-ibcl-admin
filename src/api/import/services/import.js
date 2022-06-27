
module.exports = {
    async import(books) {
        const  categories = [...new Set(books.map(book => book.category))];
        const categoriesStrapi = categories.map(category => (
            {
                data: {
                    name: category,
                    publishedAt: new Date()
                }
            }
        ));
        let categoriesCreated = [];
        for(let category of categoriesStrapi) {
            categoriesCreated.push(await strapi.service("api::category.category").create(category));
            
        };

        console.log({categoriesCreated});
        const booksStrapi = books.map(book => ({
                data : {
                        autor: book.autor,
                        category: categoriesCreated.find(cat => ( cat.name === book.category )).id,
                        descricao: book.description,
                        editor: book.editor,
                        titulo: book.title,
                        capa_url: book.imageUrl,
                        publishedAt: new Date()
                    }
        }));

        booksStrapi.forEach(async book => {
            strapi.service("api::book.book").create(book);
            console.log({book})
        })
        return {result: "ok"};
    }

}
//async, categories are inserted between books.