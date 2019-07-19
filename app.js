Ext.require('Classes.TestPanel');
Ext.application({
  name: 'HelloExt',
  launch: function() {
      Ext.create('Ext.container.Viewport', {
        layout: 'fit',
          items: [
            Ext.create('Ext.Panel', {
              title: 'Таблица',
              width: 500,
              height: 100,
              padding: 10,
              layout:'column',
              items: [
                  {
                      xtype: 'panel',
                      title: 'Первый столбец',
                      html: '<span class="buy">Поле 1</span>',
                      width: 200,
                      margin: '25'
                  },
                  {
                      xtype: 'panel',
                      title: 'Второй столбец',
                      html: '<span class="buselly">Поле 2</span>',
                      columnWidth:.4,
                      margin: '25'
                  },
                  {
                      xtype: 'panel',
                      title: 'Третий столбец',
                      html: '<span class="exit">Поле 3</span>',
                      columnWidth:.6,
                      margin: '25'
                  }],
                  renderTo: Ext.get('testtestpanel'),
          })]
      });
  }
});