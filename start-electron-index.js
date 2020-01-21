'use strict';
const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
var win = null;
function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });
  var f = url.format({
    pathname: path.join(__dirname, './start-electron-index.html'),
    protocol: 'file:',
    slashes: true,
  });
  win.loadURL(f);
  win.on('closed', () => {
    win = null;
  });
  win.webContents.openDevTools();
}
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
app.on('ready', async () => {
  createWindow();
});
