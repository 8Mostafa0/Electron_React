const { BrowserWindow,app } = require('electron')
const { electron } = require('webpack')
const path = require('path')
function createWindwos(){
    const win = new BrowserWindow({
        width:1200,
        height:800,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration:false,
            worldSafeExecuteJavaScript:true,
            contextIsolation:true
        }
    })

    win.loadFile('index.html')
}

require('electron-reload')(__dirname,{electron:path.join(__dirname,'node_modules','.bin','electron')})

app.whenReady().then(createWindwos)