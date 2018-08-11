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

/**
 * overview tab of project option modal
 */
var poOverview = new Vue({
  el: '#project-options-vue',
  data: {
    projectName: Data.projectName,
    is3d: Data.is3d,
    unit: Data.unit,
    gravityAcc: Data.gravityAcc
  },
  methods:{
    save: function(event){
      
    }
  }
})