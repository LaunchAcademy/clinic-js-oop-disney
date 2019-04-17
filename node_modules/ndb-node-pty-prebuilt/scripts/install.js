'use strict'

const fs = require('fs');
const os = require('os');
const path = require('path');

const binTarGz = path.join(__dirname, '..', 'bin',
  `node-pty-v0.7.6-node-v${process.versions.modules}-${os.platform()}-${process.arch}.tar.gz`);
if (fs.existsSync(binTarGz)) {
  require('decompress')(binTarGz, path.join(__dirname, '..'), {
    plugins: [require('decompress-targz')()]
  });
} else {
  const spawn = require('child_process').spawn;

  const p = spawn(os.platform() === 'win32' ? 'node-gyp.cmd' : 'node-gyp', ['rebuild'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });

  p.on('exit', function (code) {
    process.exit(code);
  });
}
