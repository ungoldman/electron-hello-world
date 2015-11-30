var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow
var mainWindow = null

electron.crashReporter.start()

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 840,
    height: 480,
    minWidth: 500,
    minHeight: 200,
    title: 'Electron Hello World',
    acceptFirstMouse: true
  })

  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})
