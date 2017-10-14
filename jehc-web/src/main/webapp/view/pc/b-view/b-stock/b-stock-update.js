var bStockWinEdit;
var bStockFormEdit;
function updateBStock(){
	var record = grid.getSelectionModel().selected;
	if(record.length == 0){
		msgTishi('请选择要修改的一项！');
		return;
	}
	initBStockFormEdit();
	bStockWinEdit = Ext.create('Ext.Window',{
		layout:'fit',
		width:800,
		height:400,
		maximizable:true,
		minimizable:true,
		animateTarget:document.body,
		plain:true,
		modal:true,
		title:'编辑信息',
		listeners:{
			minimize:function(win,opts){
				win.collapse();
			}
		},
		items:bStockFormEdit,
		buttons:[{
			text:'保存',
			itemId:'save',
			handler:function(button){
				submitForm(bStockFormEdit,'../bStockController/updateBStock',grid,bStockWinEdit,false,true);
			}
		},{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	bStockWinEdit.show();
	loadFormData(bStockFormEdit,'../bStockController/getBStockById?b_stock_id='+ record.items[0].data.b_stock_id);
}
function initBStockFormEdit(){
	bStockFormEdit = Ext.create('Ext.FormPanel',{
		xtype:'form',
		waitMsgTarget:true,
		defaultType:'textfield',
		fieldDefaults:{
			labelWidth:70,
			labelAlign:'left',
			flex:1,
			margin:'2 5 4 5'
		},
		items:[
		{
			fieldLabel:'库存编号',
			xtype:'textfield',
			hidden:true,
			name:'b_stock_id',
			allowBlank:false,
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'商户、卖家产品编号',
			xtype:'textfield',
			hidden:true,
			name:'b_seller_product_id',
			id:'b_seller_product_id',
			maxLength:32,
			allowBlank:false,
			anchor:'100%'
		},
		{
			fieldLabel:'商户卖家',
			xtype:'textfield',
			name:'b_seller_name',
			id:'b_seller_name',
			maxLength:32,
			anchor:'60%',
			allowBlank:false,
			readOnly:true,
			listeners:{
				render:function(p){   
			     	p.getEl().on('click',function(p){   
			     		selectBSellerProduct();
				    });
			    }
			}
		},
		{
			fieldLabel:'商户产品',
			xtype:'textfield',
			name:'b_product_name',
			id:'b_product_name',
			maxLength:32,
			anchor:'60%',
			allowBlank:false,
			readOnly:true
		},
		{
			fieldLabel:'可卖数量',
			xtype:'numberfield',
			value:'0',
			name:'b_stock_countable_sell',
			anchor:'40%'
		},
		{
			fieldLabel:'已卖数量',
			xtype:'numberfield',
			value:'0',
			name:'b_stock_locks_number',
			anchor:'40%'
		}
		]
	});
}
