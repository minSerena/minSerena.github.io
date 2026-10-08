import { existsSync } from 'node:fs';
import { resolve, delimiter } from 'node:path';
import { spawn } from 'node:child_process';

// Prefer the project-local version when installed; CI supplies the pinned Hugo.
const local = resolve('.tools', process.platform === 'win32' ? 'hugo.exe' : 'hugo');
const command = existsSync(local) ? local : 'hugo';
const child = spawn(command, process.argv.slice(2), {
  stdio: 'inherit',
  env: { ...process.env, PATH: resolve('node_modules/.bin') + delimiter + process.env.PATH },
});
child.on('error', (error) => { console.error(`Unable to start Hugo: ${error.message}`); process.exitCode = 1; });
child.on('exit', (code, signal) => { process.exitCode = code ?? (signal ? 1 : 0); });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
