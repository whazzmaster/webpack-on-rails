const { environment } = require('@rails/webpacker');
const eslintConfig = require('./loaders/eslint');

environment.loaders.prepend('eslint', eslintConfig);

module.exports = environment;
