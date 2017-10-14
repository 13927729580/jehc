var xtAppkeyAppsecretWinDetail;
var xtAppkeyAppsecretFormDetail;
function detailXtAppkeyAppsecret(){
	var record = grid.getSelectionModel().selected;
	if(record.length == 0){
		msgTishi('请选择要查看明细的项！');
		return;
	}
	initXtAppkeyAppsecretFormDetail();
	xtAppkeyAppsecretWinDetail = Ext.create('Ext.Window',{
		layout:'fit',
		width:800,
		height:400,
		maximizable:true,
		minimizable:true,
		animateTarget:document.body,
		plain:true,
		modal:true,
		title:'明细信息',
		listeners:{
			minimize:function(win,opts){
				if(!win.collapse()){
					win.collapse();
				}else{
					win.expand();
				}
			}
		},
		items:xtAppkeyAppsecretFormDetail,
		buttons:[{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	xtAppkeyAppsecretWinDetail.show();
	
	loadFormData(xtAppkeyAppsecretFormDetail,'../xtAppkeyAppsecretController/getXtAppkeyAppsecretById?xt_appkey_appsecret_id='+ record.items[0].data.xt_appkey_appsecret_id);
}
function initXtAppkeyAppsecretFormDetail(){
	xtAppkeyAppsecretFormDetail = Ext.create('Ext.FormPanel',{
		xtype:'form',
		waitMsgTarget:true,
		defaultType:'textfield',
		autoScroll:true,
		fieldDefaults:{
			labelWidth:70,
			labelAlign:'right',
			flex:1,
			readOnly:true,
			margin:'2 5 4 5'
		},
		/**新方法使用开始**/  
        scrollable:true,  
        scrollable:'x',
        scrollable:'y',
        /**新方法使用结束**/ 
		items:[
		{
			fieldLabel:'主键',
			xtype:'textfield',
			hidden:true,
			name:'xt_appkey_appsecret_id',
			allowBlank:false,
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称',
			xtype:'textfield',
			name:'xt_appkey_appsecret_name',
			maxLength:255,
			anchor:'40%'
		},
		{
			fieldLabel:'appkey',
			xtype:'textfield',
			name:'xt_appkey',
			maxLength:255,
			readOnly:true,
			anchor:'100%'
		},
		{
			fieldLabel:'appsecret',
			xtype:'textfield',
			name:'xt_appsecret',
			maxLength:255,
			readOnly:true,
			anchor:'100%'
		},
		{
			fieldLabel:'状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态',
			xtype:'combo',
			emptyText:'请选择',
			store:Xt_Appkey_AppSecret_STATUS_COMBO,
			mode:'local',
			triggerAction:'all',
			editable:false,
			hiddenName:'xt_appkey_appsecret_status',
			valueField:'value',
			displayField:'text',
			name:'xt_appkey_appsecret_status',
			maxLength:10,
			anchor:'40%'
		},
		{
			fieldLabel:'备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
			xtype:'textareafield',
			name:'xt_appkey_appsecret_remark',
			maxLength:800,
			anchor:'100%'
		},
		{
			fieldLabel:'建创时间',
			xtype:'datetimefield',
			format:'Y-m-d H:i:s',
			name:'xt_ctime',
			maxLength:19,
			anchor:'40%'
		},
		{
			fieldLabel:'改修时间',
			xtype:'datetimefield',
			format:'Y-m-d H:i:s',
			name:'xt_mtime',
			maxLength:19,
			anchor:'40%'
		},
		{
			fieldLabel:'创&nbsp;建&nbsp;&nbsp;人',
			xtype:'textfield',
			name:'xt_userinfo_realName',
			maxLength:32,
			anchor:'40%'
		}
		]
	});
}
