var bSellerWinAdd;
var bSellerFormAdd;
function addBSeller(){
	initBSellerFormAdd();
	bSellerWinAdd = Ext.create('Ext.Window',{
		layout:'fit',
		width:800,
		height:400,
//		maximized:true,
		maximizable:true,
		minimizable:true,
		animateTarget:document.body,
		plain:true,
		modal:true,
		title:'添加信息',
		headerPosition:'left',
		listeners:{
			minimize:function(win,opts){
				win.collapse();
			}
		},
		items:bSellerFormAdd,
		buttons:[{
			text:'保存',
			itemId:'save',
			handler:function(button){
				submitForm(bSellerFormAdd,'../bSellerController/addBSeller',grid,bSellerWinAdd,false,true);
			}
		},{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	bSellerWinAdd.show();
}
function initBSellerFormAdd(){
	bSellerFormAdd = Ext.create('Ext.FormPanel',{
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
			fieldLabel:'卖家名称',
			xtype:'textfield',
			name:'b_seller_name',
			maxLength:100,
			anchor:'100%'
		},
		{
			fieldLabel:'卖家电话',
			xtype:'textfield',
			name:'b_seller_tel',
			maxLength:20,
			anchor:'100%'
		},
		{
			fieldLabel:'银行名称',
			xtype:'textfield',
			name:'b_seller_bank',
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'银行卡号',
			xtype:'textfield',
			name:'b_seller_bank_num',
			maxLength:25,
			anchor:'100%'
		},
		{
			fieldLabel:'是否官方',
			name:'b_seller_official',
			xtype:"combo",
            store:[["0","是"],["1","否"]],
            emptyText:"请选择",
            mode:"local",
            value:'1',
            triggerAction:"all",
            editable:false,
			hiddenName:'b_seller_official',
			allowBlank:false,
			maxLength:2,
			anchor:'25%'
		},
		{
			fieldLabel:'地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址',
			xtype:'textfield',
			name:'b_seller_address',
			maxLength:200,
			anchor:'100%'
		},
		{
			fieldLabel:'状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态',
			name:'b_seller_status',
			xtype:"combo",
            store:[["0","可用"],["1","禁用"]],
            emptyText:"请选择",
            mode:"local",
            value:'0',
            triggerAction:"all",
            editable:false,
			hiddenName:'b_seller_status',
			allowBlank:false,
			maxLength:2,
			anchor:'25%'
		},
		{
			fieldLabel:'卖家等级',
			xtype:'numberfield',
			value:'0',
			name:'b_seller_level',
			anchor:'25%'
		}
		]
	});
}
