var localip = require('local-ip');
var config = require('./config');

if (!config || !config.user || !config.pass || !config.hostname) {
  throw new Error('Bad config!');
}

localip('wlan0', function(err, res) {
  if (err) {
    throw new Error(err);
  }
  var url = util.format('https://%s:%s@dynupdate.no-ip.com/nic/update?hostname=%s-ip.org&ip=%s', config.user, config.pass, config.hostname, res);
  request(url, function(err, res, body) {
    console.log(err, res, body);
  });
});
