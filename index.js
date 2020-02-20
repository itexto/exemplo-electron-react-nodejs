const {app, BrowserWindow} = require('electron')
const express = require('./api/bin/www');

function createWindow() {
    console.log(express)
    let win = new BrowserWindow(
        {width:1200, 
         height:600, 
         webPreferences:{nodeIntegration:true}}
    )
    // win.webContents.openDevTools()
    win.loadURL('http://localhost:3000/')
    
    win.focus();

    
}

app.whenReady().then(createWindow)