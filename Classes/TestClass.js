Ext.define('Classes.TestClass', {
  extend: 'Classes.Test',
  constructor: function (speed) {
    this.initConfig();
    this.callParent([speed]);
  },
  getinfo: function () {
    console.log(this.speed)
  }
});