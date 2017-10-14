var bWarehouseLocationWinAdd;
var bWarehouseLocationFormAdd;
function addBWarehouseLocation(){
	initBWarehouseLocationFormAdd();
	bWarehouseLocationWinAdd = Ext.create('Ext.Window',{
		layout:'fit',
		width:800,
		height:400,
		maximizable:true,
		minimizable:true,
		animateTarget:document.body,
		plain:true,
		modal:true,
		title:'添加信息',
		listeners:{
			minimize:function(win,opts){
				win.collapse();
			}
		},
		items:bWarehouseLocationFormAdd,
		buttons:[{
			text:'保存',
			itemId:'save',
			handler:function(button){
				submitForm(bWarehouseLocationFormAdd,'../bWarehouseLocationController/addBWarehouseLocation',grid,bWarehouseLocationWinAdd,false,true);
			}
		},{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	bWarehouseLocationWinAdd.show();
}
function initBWarehouseLocationFormAdd(){
	bWarehouseLocationFormAdd = Ext.create('Ext.FormPanel',{
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
			fieldLabel:'库位名称',
			xtype:'textfield',
			name:'b_warehouse_location_name',
			allowBlank:false,
			maxLength:200,
			anchor:'40%'
		},
		{
			fieldLabel:'库位大小',
			xtype:'numberfield',
			value:'0',
			name:'b_warehouse_location_space',
			maxLength:100,
			anchor:'40%'
		},
		{
			fieldLabel:'宽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度',
			xtype:'numberfield',
			value:'0',
			name:'b_warehouse_location_width',
			anchor:'40%'
		},
		{
			fieldLabel:'高&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度',
			xtype:'numberfield',
			value:'0',
			name:'b_warehouse_location_height',
			anchor:'40%'
		},
		{
			fieldLabel:'长&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度',
			xtype:'numberfield',
			value:'0',
			name:'b_warehouse_location_length',
			anchor:'40%'
		},
		{
			fieldLabel:'仓库编号',
			xtype:'textfield',
			hidden:true,
			name:'b_warehouse_id',
			id:'b_warehouse_id',
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户',
			xtype:'textfield',
			readOnly:true,
			name:'b_seller_name',
			id:'b_seller_name',
			anchor:'60%'
		},
		{
			fieldLabel:'归属仓库',
			xtype:'textfield',
			readOnly:true,
			name:'b_warehouse_name',
			id:'b_warehouse_name',
			anchor:'60%',
			listeners:{
				render:function(p){   
			     	p.getEl().on('click',function(p){   
			     		selectBWarehouse();
				    });
			    }
			}
		}
		]
	});
}
