require('should');
var i = require('../ip');

describe('Functionality', function() {
  it('Should expose a function', function() {
    i.should.be.an.instanceOf(Function);
  });
  it('Should bail out when being inited with no config', function() {
    try {
      i();
    }
    catch(err) {
      err.toString().should.equal(new Error('Bad config!').toString());
    }
  });
  it('Should do something when "doin it" with good config', function(done) {
    this.timeout(10000);
    var os = require('os');
    var ifaces = os.networkInterfaces(), iface;
    // Just take one.
    for (var prop in ifaces) {
      iface = prop;
    }
    var c = require('../default-config');
    c.iface = 'random' + Math.random();
    try {
      i(c);
    }
    catch(err) {
      // Just calling the callback for coverage.
      try {
        c.callback(new Error('test'));
      }
      catch (err) {
        err.should.not.equal(undefined);
      }
      try {
        c.callback(null, {statusCode: 401});
      }
      catch (err) {
        err.should.not.equal(undefined);
      }
      c.callback(null, {random: 'stuff'});
    }
    c.iface = iface;
    c.callback = function(err) {
      done(err);
    };
    i(c);
  });
});
