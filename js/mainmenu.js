// const Plotly = require('plotly.js');
const Papa = require('papaparse');
const {Menu, dialog} = require('electron');
const electron = require('electron');
const app = electron.app;


// if (typeof document !== 'undefiend'){
//   myPlot = require('./plot');
//   parse = require('./parsecsv');
  
// }

/* Handle create add window
function createAddWindow(){
  // Create new window
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title:'Add Shopping List Item'
  });
  // Load html into window
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
  // Garbage collection Handle
  addWindow.on('closed', function(){
    addWindow = null;
  })
}

// Catch item:add
ipcMain.on('item:add',function(e, item){
  mainWindow.webContents.send('item:add', item);
  addWindow.close();
});
*/

function parseCsv(file, callback){
    return Papa.parse(file, {complete: callback});
  }

  
function plot(data, colorCode, type){
    if(data[0].length == 2){
      plot2D(data, colorCode, 'lines');
    }
    else {
      plot3D(data, colorCode, 'surface');
    }
  }
  
  function plot2D(data, colorCode, type){
    var x = [];
    var y = [];
    data.forEach(function(d){
      x.push(d[0]);
      y.push(d[1]);
    });
  
    var input = [{
      x: x, y: y, type: type, marker: {
        color: colorCode
      },
      line: {
        color: colorCode
      }
    }];
  
    var layout = {
      showlegend: false,
      xaxis: {
        type: 'linear',
        autorange: true
      },
      yaxis: {
        type: 'linear',
        scaleanchor: "x",
        autorange: true
      }
    };
  
    Plotly.react('plot-wrapper',input, layout);
  }
  
  function plot3D(data, colorCode, type) {
    var x = [];
    var y = [];
    var z = [];
    data.forEach(function(d){
      x.push(d[0]);
      y.push(d[1]);
      z.push(d[2]);
    });
  
    var input = [
      {
        opacity: 0.8,
        
        type: type,
        x: x,
        y: y,
        z: z
      }
    ];
  
    var layout = {
      showlegend: false,
      xaxis: {
        type: 'linear',
        autorange: true
      },
      yaxis: {
        type: 'linear',
        scaleanchor: "x",
        autorange: true
      },
      zaxis: {
        type: 'linear',
        scaleanchor: "x",
        autorange: true
      }
    };
  
    Plotly.react('plot-wrapper',input, layout);
  }

// function to upload csv files to the GUI
function addCsvFiles(filepath){
  
  var data = parseCsv(filepath, function(result){
    plot(result.data, 'black', 'lines');
  });
}

const template = [
    {
        label:'File',
        submenu:[
          {
            label: 'Open File',
            click(){
              dialog.showOpenDialog({
                filters: [
                  { name: 'CSV', extensions: ['csv']},
                  { name: 'All Files', extensions: ['*']}
                ]
              }, 
                selectedFiles => addCsvFiles(selectedFiles)
              );
            }
          },
          {
            label: 'Open Folder',
            click(){
    
            }
          },
          {
            label: 'Save',
            click(){
    
            }
          },
          {
              type: 'separator'
          },
          {
            label:'Exit',
            accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click(){
              app.quit();
            }
          }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                role: 'pasteandmatchstyle'
            },
            {
                role: 'delete'
            },
            {
                role: 'setectall'
            }
        ]
    },
    {
        label:'Items',
        submenu:[
          {
            label: 'Add Item',
            click(){
              //createAddWindow();
            }
          },
          {
            label: 'Clear Items',
            click(){
              mainWindow.webContents.send('item:clear');
            }
          },
    
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'f5',
                click (item, focusedWindow) {
                    if (focusedWindow) focusedWindow.reload()
                }
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'window',
        submenu: [
            {
                role: 'minimize'
            },
            {
                role: 'close'
            }
        ]
    }
]

if (process.platform === 'darwin') {
    const name = app.getName();
    template.unshift({
        label: name,
        submenu: [
            {
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                role: 'services',
                submenu: []
            },
            {
                role: 'hide'
            },
            {
                role: 'hideothers'
            },
            {
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit'
            }
        ]
    });

    //Edit menu
    template[1].submenu.push(
        {
            type: 'separator'
        },
        {
            label: 'Speech',
            submenu: [
                {
                    role: 'startspeaking'
                },
                {
                    role: 'stopspeaking'
                }
            ]
        }
    );
    //Window menu.
    template[3].submenu = [
        {
            label: 'Close',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
        },
        {
            label: 'Minimize',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
        },
        {
            label: 'Zoom',
            role: 'zoom'
        },
        {
            type: 'separator'
        },
        {
            label: 'Bring All to Front',
            role: 'front'
        }
    ];
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);