var bProductImgWinDetail;
var bProductImgFormDetail;
function detailBProductImg(){
	var record = grid.getSelectionModel().selected;
	if(record.length == 0){
		msgTishi('请选择要查看明细的项！');
		return;
	}
	initBProductImgFormDetail();
	bProductImgWinDetail = Ext.create('Ext.Window',{
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
				win.collapse();
			}
		},
		items:bProductImgFormDetail,
		buttons:[{
			text:'关闭',
			itemId:'close',
			handler:function(button){
				button.up('window').close();
			}
		}]
	});
	bProductImgWinDetail.show();
	bProductImgWinDetail.maximize();
	/**初始化附件右键菜单开始 参数4为1表示不拥有上传和删除功能 即明细页面使用**/
	initFileRight('xt_attachment_id','xt_attachment_id_pic',1,2);
	/**初始化附件右键菜单结束**/

	/**配置附件回显方法开始**/
	var params = {xt_attachment_id:record.items[0].data.xt_attachment_id,field_name:'xt_attachment_id'};
	ajaxFilePathBackRequest('../xtCommonController/getAttachmentPathPP',params,1);
	/**配置附件回显方法结束**/
	loadFormData(bProductImgFormDetail,'../bProductImgController/getBProductImgById?b_product_img_id='+ record.items[0].data.b_product_img_id);
}
function initBProductImgFormDetail(){
	bProductImgFormDetail = Ext.create('Ext.FormPanel',{
		xtype:'form',
		waitMsgTarget:true,
		defaultType:'textfield',
		autoScroll:true,
		fieldDefaults:{
			labelWidth:77,
			labelAlign:'left',
			flex:1,
			margin:'2 5 4 5'
		},
		/**新方法使用开始**/  
        scrollable:true,  
        scrollable:'x',
        scrollable:'y',
        /**新方法使用结束**/ 
		items:[
		{
			fieldLabel:'图片编号',
			xtype:'textfield',
			hidden:true,
			name:'b_product_img_id',
			allowBlank:false,
			maxLength:32,
			anchor:'100%'
		},
		{
			fieldLabel:'图片名称',
			xtype:'textfield',
			name:'b_product_img_name',
			maxLength:100,
			anchor:'100%'
		},
		{
			fieldLabel:'图片类型',
			xtype:'combo',
			emptyText:'请选择',
			store:B_PRODUCT_IMG_TYPE_COMBO_STORE,
			mode:'local',
			triggerAction:'all',
			editable:false,
			hiddenName:'b_product_img_type',
			valueField:'value',
			displayField:'text',
			name:'b_product_img_type',
			anchor:'100%'
		},
		{
			fieldLabel:'状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态',
			xtype:'combo',
			emptyText:'请选择',
			store:B_PRODUCT_IMG_STATUS_COMBO_STORE,
			mode:'local',
			triggerAction:'all',
			editable:false,
			hiddenName:'b_product_img_status',
			valueField:'value',
			displayField:'text',
			name:'b_product_img_status',
			anchor:'100%'
		},
		{
			fieldLabel:'商品编号',
			xtype:'textfield',
			name:'b_product_id',
			id:'b_product_id',
			maxLength:32,
			hidden:true,
			anchor:'100%'
		},
		{
			fieldLabel:'商户、卖家编号',
			xtype:'textfield',
			hidden:true,
			id:'b_seller_id',
			name:'b_seller_id',
			maxLength:32,
			anchor:'100%'
		},
		{
			xtype:"fieldcontainer",
			fieldLabel:'&nbsp;&nbsp;商户卖家',
			anchor:'40%',
			layout:'hbox',
			margin:'0 0 0 0',
			items:[{
					xtype:'textfield',
					name:'b_seller_name',
					id:'b_seller_name',
					maxLength:255,
					readOnly:true,
					allowBlank:false,
					anchor:'40%'
				}
		    ]
		},
		{
			fieldLabel:'附件编号',
			xtype:'textfield',
			hidden:true,
			id:'xt_attachment_id',
			name:'xt_attachment_id',
			maxLength:32,
			anchor:'100%'
		},
		{
			title:'附件编号',
			xtype:'fieldset',
			items:{
				xtype:'box', 
				id:'xt_attachment_id_pic', 
				margin:'2 5 4 70', 
				autoEl:{
					tag:'img',
					src:bsdefimg
				}
			}
		},
		{
			fieldLabel:'图片宽度',
			xtype:'numberfield',
			value:'0',
			name:'b_product_img_width',
			maxLength:10,
			anchor:'100%'
		},
		{
			fieldLabel:'图片高度',
			xtype:'numberfield',
			value:'0',
			name:'b_product_img_height',
			maxLength:10,
			anchor:'100%'
		},
		{
			fieldLabel:'使用说明',
			xtype:'textareafield',
			name:'b_product_img_remark',
			maxLength:200,
			anchor:'100%'
		},
		{
			fieldLabel:'创建时间',
			xtype:'datefield',
			format:'Y-m-d H:i:s',
			name:'b_product_img_ctime',
			maxLength:19,
			anchor:'100%'
		},
		{
			fieldLabel:'修改时间',
			xtype:'datefield',
			format:'Y-m-d H:i:s',
			name:'b_product_img_mtime',
			maxLength:19,
			anchor:'100%'
		},
		{
			fieldLabel:'操&nbsp;&nbsp;作&nbsp;&nbsp;者',
			xtype:'textfield',
			name:'xt_userinfo_realName',
			maxLength:32,
			anchor:'100%'
		}
		]
	});
}
