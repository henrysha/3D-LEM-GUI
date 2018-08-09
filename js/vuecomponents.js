const Vue = require('vue');

/**
 * loads factor of safety from data
 */
var fsValue = new Vue({
  el: '#fs-value',
  data: {
    fsValue: Data.fsValue
  },
  render: function(createElement) {
    let element = createElement('div',"Factor of Safety: " + this._data.fsValue);
    return element;
  }
});
