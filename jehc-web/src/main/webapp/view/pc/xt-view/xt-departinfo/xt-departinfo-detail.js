var xtDepartinfoWinDetail;
var xtDepartinfoFormDetail;
function detailXtDepartinfo(){
	var record = grid.getSelectionModel().selected;
	if(record.length == 0){
		msgTishi('请选择要查看明细的项！');
		return;
	}
	initXtDepartinfoFormDetail();
	xtDepartinfoWinDetail = Ext.create('Ext.Window',{
		layout:'fit',
		width:800,
		height:400,
		maximizable:true,
		minimizable:true,
		animateTarget:document.body,
		plain:true,
		listeners:{
			minimize:function(win,opts){
				if(!win.collapse()){
					win.collapse();
				}else{
					win.expand();
				}
			}
		},
		modal:true,
		title:'明细信息',
		items:xtDepartinfoFormDetail,
		buttons:[{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	xtDepartinfoWinDetail.show();
	loadFormData(xtDepartinfoFormDetail,'../xtDepartinfoController/getXtDepartinfoById?xt_departinfo_id='+ record.items[0].data.xt_departinfo_id);
}
function initXtDepartinfoFormDetail(){
	xtDepartinfoFormDetail = Ext.create('Ext.FormPanel',{
		xtype:'form',
		waitMsgTarget:true,
		defaultType:'textfield',
		autoScroll:true,
		fieldDefaults:{
			labelWidth:70,
			labelAlign:'left',
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
			fieldLabel:'序列号',
			xtype:'textfield',
			hidden:true,
			name:'xt_departinfo_id',
			allowBlank:false,
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'部门名称',
			xtype:'textfield',
			name:'xt_departinfo_name',
			allowBlank:false,
			maxLength:50,
			anchor:'40%'
		},
		{
			fieldLabel:'上级部门',
			xtype:'treepicker',
			displayField:'text',
			anchor:'40%',
			hiddenName:'xt_departinfo_parentId',
			name:'xt_departinfo_parentId',
			minPickerHeight:200,
			maxHeight:200,
			editable:false,
			store:Ext.create('Ext.data.TreeStore',{
				fields:['id','text'],
				root:{
					text:'一级部门',
					id:'0',
					expanded:true
				},
				proxy:{
					type:'ajax',
					url:'../xtDepartinfoController/getXtDepartinfoTree',
					reader:{
						type:'json'
					}
				}
			})
		},
		{
			fieldLabel:'联系电话',
			xtype:'textfield',
			name:'xt_departinfo_connectTelNo',
			maxLength:12,
			anchor:'40%'
		},
		{
			fieldLabel:'移动电话',
			xtype:'textfield',
			name:'xt_departinfo_connectMobileTelNo',
			maxLength:20,
			anchor:'40%'
		},
		{
			fieldLabel:'传&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真',
			xtype:'textfield',
			name:'xt_departinfo_faxes',
			maxLength:50,
			anchor:'40%'
		},
		{
			fieldLabel:'部门信息',
			xtype:'textareafield',
			name:'xt_departinfo_desc',
			maxLength:200,
			anchor:'100%'
		},
		{
			fieldLabel:'立成时间',
			xtype:'datefield',
			format:'Y-m-d',
			name:'xt_departinfo_time',
			maxLength:20,
			anchor:'40%'
		},
		{
			fieldLabel:'部门性质',
			xtype:'textfield',
			name:'xt_departinfo_type',
			maxLength:200,
			anchor:'40%'
		}
		]
	});
}
