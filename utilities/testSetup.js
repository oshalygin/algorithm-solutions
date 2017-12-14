/* eslint-disable no-process-env */

require('babel-register')({});

// Setting NODE_ENV to test instead of production because setting it to production will suppress error messaging
// and propType validation warnings.
process.env.NODE_ENV = 'test';
console.log = function() {};
console.warn = function() {};
console.error = function() {};
