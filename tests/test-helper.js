process.env.NODE_ENV = 'test';

// Chai
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

// Sinon
const sinon = require('sinon');
chai.use(require('sinon-chai'));

module.exports = {
  expect,
  sinon,
};
