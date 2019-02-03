const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

// init our window object, if not it will be taken off by garbage collector
let win;

function createWindow() {
    // create browser window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + "/img/logo_yellow.png"
    })

    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // open devTools
    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    })
}

app.on('ready', createWindow);

// quit when all windows are closed

app.on('window-all-closed', () => {
    // test if user is on Mac: darwin == Mac, win32 == Windows
    if (process.platform !== "darwin") {

    }
})