var should = require('should');
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
	it('Should do something when "doin it" with good config', function() {
  	var os = require('os');
		var ifaces = os.networkInterfaces(), iface;
		// Just take one. 
		var returnVal;
		for (var prop in ifaces) {
			iface = prop;
			// console.log(prop);
			// for (var i = 0, len = ifaces[prop].length; i < len; i++) {
			// 	var details = ifaces[dev][i];
	    //   if (details.family === 'IPv4') {
	    //     returnVal = details.address;
	    //   }
			// }
			
		}
		var c = require('../default-config');
		c.iface = 'random' + Math.random();
		try {
			i(c);
		}
		catch(err) {
			console.log(err);
		}
		c.iface = iface;
		i(c);
	});
});