var bSellerWinDetail;
var bSellerFormDetail;
function detailBSeller(){
	var record = grid.getSelectionModel().selected;
	if(record.length == 0){
		msgTishi('请选择要查看明细的项！');
		return;
	}
	initBSellerFormDetail();
	bSellerWinDetail = Ext.create('Ext.Window',{
		layout:'fit',
		width:800,
		height:400,
//		maximized:true,
		maximizable:true,
		minimizable:true,
		animateTarget:document.body,
		plain:true,
		modal:true,
		title:'明细信息',
		headerPosition:'left',
		listeners:{
			minimize:function(win,opts){
				win.collapse();
			}
		},
		items:bSellerFormDetail,
		buttons:[{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	bSellerWinDetail.show();
	loadFormData(bSellerFormDetail,'../bSellerController/getBSellerById?b_seller_id='+ record.items[0].data.b_seller_id);
}
function initBSellerFormDetail(){
	bSellerFormDetail = Ext.create('Ext.FormPanel',{
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
			fieldLabel:'基础卖家编号',
			xtype:'textfield',
			hidden:true,
			name:'b_seller_id',
			allowBlank:false,
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'卖家名称',
			xtype:'textfield',
			name:'b_seller_name',
			maxLength:100,
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
		},
		{
			fieldLabel:'卖家电话',
			xtype:'textfield',
			name:'b_seller_tel',
			maxLength:20,
			anchor:'100%'
		},
		{
			fieldLabel:'卖家等级',
			xtype:'numberfield',
			value:'0',
			name:'b_seller_level',
			anchor:'100%'
		},
		{
			fieldLabel:'登陆账户编号',
			xtype:'textfield',
			name:'b_seller_login_id',
			maxLength:32,
			hidden:true,
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
			xtype:"combo",
			store:[["0","是"],["1","否"]],
            emptyText:"请选择",
            mode:"local",
            value:'0',
            triggerAction:"all",
            editable:false,
			name:'b_seller_official'
		},
		{
			fieldLabel:'地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址',
			xtype:'textfield',
			name:'b_seller_address',
			maxLength:200,
			anchor:'100%'
		},
		{
			fieldLabel:'创建时间',
			xtype:'datefield',
			format:'Y-m-d H:i:s',
			name:'b_seller_ctime'
		},
		{
			fieldLabel:'修改时间',
			xtype:'datefield',
			format:'Y-m-d H:i:s',
			name:'b_seller_mtime'
		},
		{
			fieldLabel:'操&nbsp;&nbsp;作&nbsp;者',
			xtype:'textfield',
			name:'xt_userinfo_realName',
			maxLength:32
		}
		]
	});
}
