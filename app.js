
Ext.require('Classes.TestPanel');
Ext.application({
  name: 'HelloExt',
  launch: function() {
      Ext.create('Ext.container.Viewport', {
          layout: 'fit',
          items: [
              {
                  xtype: 'testpanel',
                  id: 'testpanel',
                  items: [
                  {
                    html: `
                    <ul id="menu">
                      <li class='buy'>Купить</li>
                      <li class='sell'>Продать</li>
                      <li class='exit'>Выход</li>
                    </ul>
                    `
                  },
                  {
                    html: '<span class="selects">HTML_3</span>'
                  },
                  {
                    html: '<span class="selects">HTML_2</span>',
                  }]
              }]
      });
  }
});