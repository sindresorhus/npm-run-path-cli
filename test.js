import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import execa from 'execa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.is(
		stdout.split(path.delimiter)[0],
		path.join(__dirname, 'node_modules/.bin'),
	);
});
