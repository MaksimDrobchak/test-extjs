Ext.define('Classes.Test', {
  extend: 'Ext.Base',
  alias: 'Classes.Basess',
  speed: 0,
  constructor: function (speed) {
    this.initConfig();
    this.speed = speed;
  },
  getRun: function (speed) {
    this.speed = this.speed + speed;

    console.log('add ' +speed);
    console.log(this.speed);
  }
});