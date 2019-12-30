// "Translate"
module.exports = {
  presets: [
    '@babel/preset-env', // funcionalidades do js no navegador
    '@babel/preset-react', // traduz as funcionalidades do react pro navegador
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
