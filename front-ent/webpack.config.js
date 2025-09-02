module.exports = {
  // ...outras configs
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
