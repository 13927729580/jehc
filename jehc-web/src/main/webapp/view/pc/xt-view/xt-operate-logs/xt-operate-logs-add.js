var xtOperateLogsWinAdd;
var xtOperateLogsFormAdd;
function addXtOperateLogs(){
	initXtOperateLogsFormAdd();
	xtOperateLogsWinAdd = Ext.create('Ext.Window',{
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
				if(!win.collapse()){
					win.collapse();
				}else{
					win.expand();
				}
			}
		},
		items:xtOperateLogsFormAdd,
		buttons:[{
			text:'保存',
			itemId:'save',
			handler:function(button){
				submitForm(xtOperateLogsFormAdd,'../xtOperateLogsController/addXtOperateLogs',grid,xtOperateLogsWinAdd,false,true);
			}
		},{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	xtOperateLogsWinAdd.show();
}
function initXtOperateLogsFormAdd(){
	xtOperateLogsFormAdd = Ext.create('Ext.FormPanel',{
		xtype:'form',
		waitMsgTarget:true,
		defaultType:'textfield',
		autoScroll:true,
		fieldDefaults:{
			labelWidth:70,
			labelAlign:'left',
			flex:1,
			margin:'2 5 4 5'
		},
		items:[
		{
			fieldLabel:'开始时间',
			xtype:'textfield',
			name:'xt_operate_logBegTime',
			maxLength:20,
			anchor:'100%'
		},
		{
			fieldLabel:'操作人ID外键',
			xtype:'textfield',
			name:'xt_userinfo_id',
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'执行的类名',
			xtype:'textfield',
			name:'xt_operate_logClasseName',
			maxLength:2000,
			anchor:'100%'
		},
		{
			fieldLabel:'执行的方法名',
			xtype:'textfield',
			name:'xt_operate_logMethod',
			maxLength:800,
			anchor:'100%'
		},
		{
			fieldLabel:'方法参数',
			xtype:'textfield',
			name:'xt_operate_logMethodPar',
			maxLength:4294967295,
			anchor:'100%'
		},
		{
			fieldLabel:'执行的结果',
			xtype:'textfield',
			name:'xt_operate_logResult',
			maxLength:4294967295,
			anchor:'100%'
		},
		{
			fieldLabel:'执行总时间',
			xtype:'textfield',
			name:'xt_operate_logTotalTime',
			maxLength:20,
			anchor:'100%'
		},
		{
			fieldLabel:'结束时间',
			xtype:'textfield',
			name:'xt_operate_logEndTime',
			maxLength:20,
			anchor:'100%'
		},
		{
			fieldLabel:'访问类型',
			xtype:'textfield',
			name:'xt_operate_logType',
			maxLength:20,
			anchor:'100%'
		},
		{
			fieldLabel:'访问地址',
			xtype:'textfield',
			name:'xt_operate_logUri',
			maxLength:200,
			anchor:'100%'
		},
		{
			fieldLabel:'最大内存',
			xtype:'numberfield',
			value:'0',
			name:'xt_operate_logMaxMemory',
			anchor:'100%'
		},
		{
			fieldLabel:'已分配内存',
			xtype:'numberfield',
			value:'0',
			name:'xt_operate_logTotalMemory',
			anchor:'100%'
		},
		{
			fieldLabel:'已分配内存中的剩余空间',
			xtype:'numberfield',
			value:'0',
			name:'xt_operate_logFreeMemory',
			anchor:'100%'
		},
		{
			fieldLabel:'最大可用内存',
			xtype:'numberfield',
			value:'0',
			name:'xt_operate_logUseMemory',
			anchor:'100%'
		}
		]
	});
}