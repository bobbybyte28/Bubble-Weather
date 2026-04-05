// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 550,
    frame: false,
    resizable: false,   
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
    }
  });

  win.removeMenu(); // 💖 Removes menu completely
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

//this is added now 
const { ipcMain } = require('electron');

ipcMain.on("minimizeWindow", (event) => {
    BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on("closeWindow", (event) => {
    BrowserWindow.getFocusedWindow().close();
});
