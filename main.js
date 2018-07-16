const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu, ipcMain, dialog} = electron;




// Set ENV (Uncomment for the final product)
//process.env.NODE_ENV = 'production';

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
  mainWindow = new BrowserWindow({width: 1920, height:900});
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });
  
  
  // // Build menu from template
  // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // // Insert Menu
  // Menu.setApplicationMenu(mainMenu);
  //require('./js/mainmenu');
});





// If mac, add empty object to menu
// already added in mainmenu.js => could manipulate later
// if(process.platform == 'darwin'){
//   mainMenuTemplate.unshift({});
// }

// Add developer tools item if not in prod
// if(process.env.NODE_ENV !== 'production'){
//   mainMenuTemplate.push({
//     label: 'Developer Tools',
//     submenu:[
//       {
//         label: 'Toggle DevTools',
//         accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
//         click(item, focusedWindow){
//           focusedWindow.toggleDevTools();
//         }
//       },
//       {
//         role: 'reload'
//       }
//     ]
//   });
// }
