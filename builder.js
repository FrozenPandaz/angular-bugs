const { createBuilder } = require('@angular-devkit/architect');
const { of } = require('rxjs');
const { tap } = require('rxjs/operators');
module.exports = {
  default: createBuilder((options, context) => {
    console.log(options);
    return of({
      success: true
    });
  })
};
