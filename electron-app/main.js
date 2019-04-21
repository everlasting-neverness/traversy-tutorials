const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

// Set ENV
process.env.NODE_ENV = 'production';

let mainWindow, addWindow;

// Listen for app to be ready
app.on('ready', function() {
    // Create new Window
    mainWindow = new BrowserWindow({});
    // Load html file into Window
    mainWindow.loadURL(
        // here we get the path "file://dirname/mainWindow.html"
        url.format({
            pathname: path.join(__dirname, 'mainWindow.html'),
            protocol: 'file:',
            slashes: true
        })
    );
    // Quit app when closed
    mainWindow.on('closed', function() {
        app.quit();
    });

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert Menu
    Menu.setApplicationMenu(mainMenu);
});

// Handle create AddWindow
function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add Shopping List Item'
    });

    addWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'addWindow.html'),
            protocol: 'file:',
            slashes: true
        })
    );
    // Garbage collection handle
    addWindow.on('closed', function() {
        addWindow = null;
    });
}

// catch Item add
ipcMain.on('item:add', function(e, item) {
    // Send payload to mainWindow page (idea is the same to websockets)
    mainWindow.webContents.send('item:add', {
        id: Math.random(),
        value: item
    });
    addWindow.close();
})

// Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Clear Items',
                click() {
                    mainWindow.webContents.send('item:clear')
                }
            },
            {
                label: 'Quit',
                // Add shortcuts
                accelerator:
                    process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];

// If macOS, add empty object to menu (handles view issue)
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

// Add developer tools item if not in prod
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: "Developer Tools",
        submenu: [
            {
                label: 'Toggle devTools',
                accelerator:
                    process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}