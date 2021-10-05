#!/usr/bin/env node
import meow from 'meow';
import {npmRunPath} from 'npm-run-path';

meow(`
	Example
	  $ export PATH="$(npm-run-path)"
`, {
	importMeta: import.meta,
});

console.log(npmRunPath());
