var assert = require('assert');
var pibrary = require('../lib/pibrary.js').default;

describe('Pibrary', function () {
  describe('#pi()', function () {
    it('should return a value equal to Math.PI', function () {
      assert.equal(Math.PI, pibrary.pi());
    });
  });
});
