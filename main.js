const {app, BrowserWindow}  = require('electron')
app.on('ready', () => {
  require('devtron').install()
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();
  let secondWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    },
    parent: mainWindow
  })
  secondWindow.loadFile('second.html')
})