module.exports = function(config) {
  var localip = require('local-ip');
  var util = require('util');
  var request = require('request');

  if (!config || !config.user || !config.pass || !config.hostname || !config.iface) {
    throw new Error('Bad config!');
  }

  localip(config.iface, function(err, res) {
    if (err) {
      throw new Error(err);
    }
    var url = util.format('https://%s:%s@dynupdate.no-ip.com/nic/update?hostname=%s&ip=%s', config.user, config.pass, config.hostname, res);
    request(url, function(err, res, body) {
      if (err) {
        throw new Error('Problem: ' + err);
      }
      if (res.statusCode === 401) {
        throw new Error('Probably bad credentials.');
      }
      console.log('All good');
    });
  });
}
