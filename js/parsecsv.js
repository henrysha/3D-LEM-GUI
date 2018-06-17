const Papa = require('papaparse');

function parseCsv(file, callback){
  return Papa.parse(file, {complete: callback});
}

module.exports.parseCsv = parseCsv();