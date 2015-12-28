#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fn = require('npm-run-path');

meow(`
	Example
	  $ export PATH="$(npm-run-path)"
`);

console.log(fn());
