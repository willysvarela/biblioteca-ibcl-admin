module.exports = {
    routes: [
        {
            method: "POST",
            path: "/import",
            handler: "import.import",
            config: {
                auth: false
            }
        }
    ]
}