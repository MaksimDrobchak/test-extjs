Ext.define('Classes.TestClass2', {
  alias: 'testclass2',
  mixins: {
    test: 'Classes.Test',
    test2: 'Classes.TestClass',
  },
  constructor: function (speed) {
    this.initConfig();
    if(speed){
      console.log('mixin', speed)
      this.getRun(-speed);
    }
    this.callParent();
  },
  getSlow: function (speed) {
    this.speed = this.speed - speed;

    console.log('minus ' + speed);
    console.log('speed now ' + this.speed);
  }
});