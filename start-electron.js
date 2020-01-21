'use strict';

var path = require('path');
var child_process = require('child_process');
var electron = require('electron');

var entry = path.join(__dirname, './start-electron-index');
var args = ['--no-sandbox', entry];
var proc = child_process.spawn(electron, args, {
  stdio: ['ipc'],
});
