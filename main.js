const { AppServerModuleNgFactory } = require('./dist/v8app-server/main');
const { renderModuleFactory } = require('@angular/platform-server');
require('zone.js/dist/zone-node');
// console.log(AppServerModuleNgFactory);
(async () => {
  console.log('\nRENDERING APPLICATION\n');
  const html = await renderModuleFactory(AppServerModuleNgFactory, {
    document: '<app-root></app-root>',
    url: '/lazy'
  });
  console.log(html);
})();
