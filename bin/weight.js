#!/usr/bin/env node

// this is a similar hack as `mocha` and `_mocha`

var spawn = require('child_process').spawn;
var args = [
	'--expose-gc',
	'--harmony' /* in case a lib depends on it*/,
	__dirname + '/_weight'].concat(process.argv.slice(2));

var proc = spawn(process.argv[0], args, { customFds: [0,1,2] });

