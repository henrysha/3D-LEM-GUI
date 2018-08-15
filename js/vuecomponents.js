
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
    dimension: Data.dimension,
    unitSystem: Data.unitSystem,
    unit: Data.unit,
    dpsf: Data.dpsf,
    accuracy: Data.accuracy,
    showSupport: Data.showSupport,
    supportForce: Data.supportForce,
    slipSurface: Data.slipSurface,
    seismicApplied: Data.seismicApplied,
    seismicInput: Data.seismicInput,
    analysisMethod: Data.analysisMethod,
    maxSlice: Data.maxSlice,
    intercolumnForce: Data.intercolumnForce,
    groundWaterMethod: Data.groundWaterMethod,
    runoutConducted: Data.runoutConducted,
    runoutTimeInterval: Data.runoutTimeInterval,
    runoutCriterion: Data.runoutCriterion,
    runoutMethod: Data.runoutMethod,
    runoutLateralConfinement: Data.runoutLateralConfinement,
    tensionCrack: Data.tensionCrack,
    maxIteration: Data.maxIteration ? Data.maxIteration : 75,
    minLambda: Data.minLambda ? Data.minLambda : 6,
    maxLambda: Data.maxLambda ? Data.maxLambda : -1,
    initialFS: Data.initialFS ? Data.initialFS : 1.5,
    FSTolerance: Data.FSTolerance ? Data.FSTolerance : .0005,
    slidingDirection: Data.slidingDirection
  },
  computed: {
    gravityAcc: function() {
      if(this.unitSystem == "metric"){
        return "9.8 m/s^2";
      }
      if(this.unitSystem == "imperial"){
        return "32 ft/s^2";
      }
      return "Please select unit system";
    },
    unitWeightOfWater: function() {
      if(this.unitSystem == "metric"){
        return "9.81 kN/m^3";
      }
      if(this.unitSystem == "imperial"){
        return "62.4 pcf";
      }
      return "Please select unit system";
    }
  },
  methods:{
    /** 
     * save
     * DESCRIPTION: save the datas to Data object and toggle Modal.
     * OUTPUT: Data object updated
     */
    save: function(event){
      Data.projectName = this.projectName;
      Data.dimension = this.dimension;
      Data.unitSystem = this.unitSystem;
      Data.unit = this.unit;
      Data.dpsf = this.dpsf;
      Data.accuracy = this.accuracy;
      Data.showSupport = this.showSupport;
      Data.supportForce = this.supportForce;
      Data.slipSurface = this.slipSurface;
      Data.seismicApplied = this.seismicApplied;
      Data.seismicInput = this.seismicInput;
      Data.analysisMethod = this.analysisMethod;
      Data.maxSlice = this.maxSlice;
      Data.intercolumnForce = this.intercolumnForce;
      Data.groundWaterMethod = this.groundWaterMethod;
      Data.runoutConducted = this.runoutConducted;
      Data.runoutTimeInterval = this.runoutTimeInterval;
      Data.runoutCriterion = this.runoutCriterion;
      Data.runoutMethod = this.runoutMethod;
      Data.runoutLateralConfinement = this.runoutLateralConfinement;
      Data.tensionCrack = this.tensionCrack;
      Data.maxIteration = this.maxIteration;
      Data.minLambda = this.minLambda;
      Data.maxLambda = this.maxLambda;
      Data.initialFS = this.initialFS;
      Data.FSTolerance = this.FSTolerance;
      Data.slidingDirection = this.slidingDirection;

      // close modal
      $('#projectOptionModal').modal('toggle');
    }
  }
})
