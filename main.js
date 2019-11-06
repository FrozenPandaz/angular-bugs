require('zone.js/dist/zone-node');

const { enableProdMode } = require('@angular/core');

enableProdMode();

const { renderModuleFactory } = require('@angular/platform-server');

const { AppServerModuleNgFactory } = require('./dist/ng8-app-server/main');

const { readFileSync } = require('fs');

const index = readFileSync('./dist/ng8-app/index.html');

renderModuleFactory(AppServerModuleNgFactory, {
  document: index
})
  .then(() => {
    console.log('promise resolved');
  })
  .catch(() => {
    console.log('promise rejected');
  });
