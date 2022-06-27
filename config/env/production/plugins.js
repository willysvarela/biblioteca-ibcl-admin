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
  upload: {
    config: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
                Bucket: env('AWS_BUCKET_NAME'),
            },
        },
    },
}
};
