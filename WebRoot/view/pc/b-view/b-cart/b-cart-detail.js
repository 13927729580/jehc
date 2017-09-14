var bCartWinDetail;
var bCartFormDetail;
function detailBCart(){
	var record = grid.getSelectionModel().selected;
	if(record.length == 0){
		msgTishi('请选择要查看明细的项！');
		return;
	}
	initBCartFormDetail(record.items[0].data.b_cart_id);
	xtCityList.load({params:{parentId:record.items[0].data.xt_provinceID}});
	var parm = {parentId:record.items[0].data.xt_provinceID};
    beforeloadstoreByStore(xtCityList,parm);
	xtDistrictList.load({params:{parentId:record.items[0].data.xt_cityID}});
	parms = {parentId:record.items[0].data.xt_cityID};
    beforeloadstoreByStore(xtDistrictList,parms);
    reGetWidthAndHeight();
	bCartWinDetail = Ext.create('top.Ext.Window',{
		layout:'fit',
		width:clientWidth,                    
		height:clientHeight,
//		maximized:true,
		maximizable:true,
		minimizable:true,
		animateTarget:document.body,
		plain:true,
		modal:true,
		headerPosition:'right',
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
		items:bCartFormDetail,
		buttons:[{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	bCartWinDetail.show();
	loadFormData(bCartFormDetail,'../bCartController/getBCartById?b_cart_id='+ record.items[0].data.b_cart_id);
	top.Ext.getCmp('summoney').setText("汇总金额:"+record.items[0].data.b_cart_total_price+"元/单位");
}
function initBCartFormDetail(b_cart_id){
	initBCartDetailGrid(b_cart_id);
	var detailTab = Ext.create('top.Ext.TabPanel',{
		activeTab:0,
		region:'center',
		tabPosition:'left',
		layout:'fit',
		title:'购物车信息',
		items:[
		{
			title:'基础信息',
			autoScroll:true,
			items:[{
					xtype:'fieldset',
					border:false,
					title:'基本信息',
					items:[{
						fieldLabel:'购物车编号',
						xtype:'textfield',
						hidden:true,
						name:'b_cart_id',
						allowBlank:false,
						maxLength:32,
						anchor:'100%'
					},{
						fieldLabel:'会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员',
						store:b_memberList,
						xtype:"combo",
						id:'b_member_id',
						name:'b_member_id',
						pageSize:10, 
			            emptyText:'请选择',  
			            mode:'local',  
			            triggerAction:'all',  
			            valueField:'b_member_id',  
			            displayField:'b_member_name',  
			            editable:false, 
						allowBlank:false,
						maxLength:32,
						anchor:'40%',
						listeners:{
		                select:function(combo,records,options){
		                		initBInvoiceWin(this.value);
		                		/**
			                 	top.Ext.getCmp('b_invoice_id').setValue("");
			                    b_invoiceList.reload({params:{b_member_id:this.value}});
			                    var parm = {start:getCP(b_invoiceList)[0],limit:getCP(b_invoiceList)[1],b_member_id:this.value};
							    beforeloadstoreByStore(b_invoiceList,parm)
							    **/
			                 }
			             }
					},
					{
						fieldLabel:'购买总价',
						xtype:'textfield',
						name:'b_cart_total_price',
						id:'b_cart_total_price',
						anchor:'40%'
					},
					{
						fieldLabel:'订单单号',
						xtype:'textfield',
						name:'b_cart_orderkey',
						maxLength:32,
						anchor:'40%'
					},
					{
						fieldLabel:'来&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;源',
						xtype:"combo",
			            store:[["0","普通订单"],["1","团购订单"],["2","其他"]],
			            emptyText:"请选择",
			            mode:"local",
			            value:'0',
			            triggerAction:"all",
			            editable:false,
			            name:'b_cart_from',
						hiddenName:'b_cart_from',
						allowBlank:false,
						anchor:'40%'
					},
					{
						fieldLabel:'sessionid',
						xtype:'textfield',
						
						hidden:true,
						name:'b_cart_sessionid',
						id:'b_cart_sessionid',
						maxLength:255,
						readOnly:true,
						anchor:'40%'
					},
					{
						fieldLabel:'备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
						xtype:'textareafield',
						name:'b_cart_remark',
						
						maxLength:500,
						anchor:'100%'
					},
					{
						fieldLabel:'购买总数',
						xtype:'numberfield',
						readOnly:true,
						
						id:'b_cart_total_number',
						name:'b_cart_total_number',
						anchor:'40%'
					},
					{
						fieldLabel:'发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;票',
						xtype:'textfield',
						name:'b_invoice_name',
						id:'b_invoice_name',
						maxLength:255,
						readOnly:true,
						
						anchor:'40%'
					},
					{
						fieldLabel:'发票编号',
						xtype:'textfield',
						hidden:true,
						name:'b_invoice_id',
						id:'b_invoice_id',
						maxLength:255,
						readOnly:true,
						anchor:'40%'
					},
					{
						fieldLabel:'卖家编号',
						xtype:'textfield',
						hidden:true,
						name:'b_seller_id',
						id:'b_seller_id',
						maxLength:255,
						readOnly:true,
						anchor:'40%'
					}
					/**
					{
						fieldLabel:'发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;票',
						name:'b_invoice_id',
						id:'b_invoice_id',
						store:b_invoiceList,
						xtype:"combo",
						pageSize:10, 
			            emptyText:'请选择',  
			            mode:'local',  
			            triggerAction:'all',  
			            valueField:'b_invoice_id',  
			            displayField:'b_invoice_name',  
			            editable:false, 
						allowBlank:false,
						maxLength:32,
						anchor:'40%'
					}**/]
				},
				{
					xtype:'fieldset',
					border:false,
					title:'配送地址信息',
					items:[
						{
						fieldLabel:'省&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份',
						name:'xt_provinceID',
						xtype:"combo",
						store:xtProvinceList, 
			            emptyText:'请选择',  
			            mode:'local',  
			            triggerAction:'all',  
			            valueField:'ID',  
					    displayField:'NAME',  
			            editable:false, 
						allowBlank:false,
						maxLength:32,
						anchor:'60%',
						listeners:{
			                 select:function(combo,records,options){
			                	top.Ext.getCmp('xt_cityID').setValue("");
			                	top.Ext.getCmp('xt_districtID').setValue("");
					            xtCityList.load({params:{parentId:this.value}});
					            parms = {parentId:this.value};
					    	    beforeloadstoreByStore(xtCityList,parms);
					            xtDistrictList.load();
					            parms = {parentId:null};
					    	    beforeloadstoreByStore(xtDistrictList,parms);
			                    /**设置默认选中第一行的值
			                    xtCityList.on('load',function(store,record,opts){                                    
			                     var xt_cityID = record[0].data.xt_cityID;
			                     var xt_cityName=record[0].data.xt_cityName;
			                     xtCityList.setValue(xt_cityID);
			                     xtCityList.setDisplayValue(xt_cityName);
			                    });
			                    **/
			                 }
			             }
					},
					{
						fieldLabel:'城&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;市',
						id:'xt_cityID',
						name:'xt_cityID',
						xtype:"combo",
						store:xtCityList, 
			            emptyText:'请选择',  
			            mode:'local',  
			            triggerAction:'all',  
			            valueField:'ID',  
					    displayField:'NAME',  
			            editable:false, 
						allowBlank:false,
						maxLength:32,
						anchor:'60%',
						listeners:{
			                 select:function(combo,records,options){
			                	top.Ext.getCmp('xt_districtID').setValue("");
					            xtDistrictList.load({params:{parentId:this.value}});
					            parms = {parentId:this.value};
					    	    beforeloadstoreByStore(xtDistrictList,parms);
			                 }
			             }
					},
					{
						fieldLabel:'区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;县',
						xtype:'textfield',
						id:'xt_districtID',
						name:'xt_districtID',
						xtype:"combo",
						store:xtDistrictList, 
			            emptyText:'请选择',  
			            mode:'local',  
			            triggerAction:'all',  
			            valueField:'ID',  
					    displayField:'NAME',  
			            editable:false, 
						maxLength:32,
						anchor:'60%'
					},
					{
						fieldLabel:'详细地址',
						
						xtype:'textfield',
						id:'b_cart_order_address_address',
						name:'b_cart_order_address_address',
						maxLength:200,
						anchor:'100%'
					},
					{
						layout:"column",
						items:[{
								columnWidth:.3,
								baseCls:'x-plain',
								xtype:'panel',
								
								fieldLabel:'状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态',
								name:'b_cart_order_address_status',
								xtype:"combo",
					            store:[["0","正常"],["1","已作废"]],
					            emptyText:"请选择",
					            mode:"local",
					            value:'0',
					            triggerAction:"all",
					            editable:false,
								hiddenName:'b_cart_order_address_status',
								allowBlank:false,
								anchor:'100%'
						}]
					}]
				}]
		},
		{
			title:'出售商品信息',
			autoScroll:true,
			layout:'fit',
			items:[b_cart_detail_grid]
		}
		]
	});
	bCartFormDetail = Ext.create('top.Ext.FormPanel',{
		xtype:'form',
		waitMsgTarget:true,
		defaultType:'textfield',
		autoScroll:false,
		layout:'fit',
		fieldDefaults:{
			labelWidth:70,
			labelAlign:'left',
			flex:1,
			readOnly:true,
			margin:'2 5 4 5'
		},
		items:detailTab
	});
}
