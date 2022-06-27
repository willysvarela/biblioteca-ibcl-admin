module.exports = {
  "import-json-file": {
    enabled: true,
    resolve: "./src/plugins/import-json-file",
  },
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 2000,
      maxLimit: 10000,
    },
  },
};
