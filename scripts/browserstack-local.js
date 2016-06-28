var browserstack = require('browserstack-local');
var childProcess = require('child_process');

var bs_local = new browserstack.Local();
var bs_local_args = { 'key': 'sERx582EV3yJpqgpGRdE', 'forcelocal': 'true', 'onlyAutomate': 'true' };

bs_local.start(bs_local_args, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('browserstack-local connected.');

    child = childProcess.execSync('./node_modules/.bin/nightwatch -c browserstack-local.conf.js -e chrome', { stdio: [ 0, 0, 0 ] });

    if(child) {
      child.on('exit', function() {
        if(bs_local) {
          bs_local.stop(function() {});
        }

        exit(0);
      });
    }
  }
  if(bs_local) {
    bs_local.stop(function() {});
  }

  process.on('exit', function (code) {
    bs_local.stop(function() {
      console.log("closing browserstack-local.");
    });
  });
});
