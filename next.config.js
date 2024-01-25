const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['tailwindcss']);

module.exports = withPlugins([withTM], {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  },
});
