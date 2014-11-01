'use strict';

var chai = require('chai');
var exec = require('child_process').exec;
var fs = require('fs');
var expect = chai.expect;
var assert = chai.assert;
var readme;

describe('Basic tee functionality', function() {
  it('should take input from standard in and output it to both ' +
    'standard out and a file specified', function(done) {
    fs.readFile('./README.md', function(err, data) {
      assert.equal(err, null);
      expect(data).to.be.a('object');
      readme = data.toString();

      exec('cat README.md | node tee outputfile.txt',
        function(error, stdout, stderr) {
        assert.equal(error, null);
        expect(stdout).equals(readme);
        expect(stderr).equals('');

        fs.readFile('./outputfile.txt', function(err, data) {
          assert.equal(err, null);
          expect(data).to.be.a('object');
          expect(data.toString()).equals(readme);
          done();
        });
      });
    });
  });
});
