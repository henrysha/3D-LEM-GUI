// OS dialog
var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)


/** FILE INPUT MODAL */
/**
 * file Input from the modal
 */
var fileInput = $('#fileInput');
fileInput.on('change', function(){
  console.log(fileInput);
  parseCsv(fileInput[0].files[0],function(result){
    Data.csv = result.data;
  });
});
/**
 * 2d/3d button from the modal
 * connected to mainWindow.html under modal-body: btn-group
 */
var set3d = function (_is3d){
  Data.is3d = _is3d;
  if(_is3d){
    $('#m-3d-button').addClass('active');
    $('#m-2d-button').removeClass('active');
  } else {
    $('#m-3d-button').removeClass('active');
    $('#m-2d-button').addClass('active');
  }
}

/**
 * open file button on the modal
 */
var openFile = function (){
  Data.csv == null ? alert('no file opened') : plot(Data.csv, 'black', Data.is3d);
  $('#openFileModal').modal('toggle');
}

/* code for save file from ourcodeworld.com ==> to be used.
// You can obviously give a direct path without use the dialog (C:/Program Files/path/myfileexample.txt)
dialog.showSaveDialog((fileName) => {
    if (fileName === undefined){
        console.log("You didn't save the file");
        return;
    }

    // fileName is a string that contains the path and filename created in the save file dialog.  
    fs.writeFile(fileName, content, (err) => {
        if(err){
            alert("An error ocurred creating the file "+ err.message)
        }
                    
        alert("The file has been succesfully saved");
    });
}); 
 */