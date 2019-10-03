// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('electron').remote
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('node-version').innerHTML = process.versions.node
  document.getElementById('send').addEventListener('click', () => {
    ipcRenderer.send('message', 'hello from render')
    let win = new BrowserWindow({ width: 800,height: 600});
    win.loadURL('https://www.baidu.com')
  })
  ipcRenderer.on('reply', (event, arg) => {
    document.getElementById('message').innerHTML = arg
  })
})