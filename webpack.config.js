const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'mfa1',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfa1',
      remotes: {},
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};