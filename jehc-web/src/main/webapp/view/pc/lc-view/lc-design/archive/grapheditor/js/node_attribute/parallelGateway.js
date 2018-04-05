//并行网关
var parallelGatewayNodeAttributeWin;
var parallelGatewayNodeAttributeTabPanel;
var parallelGatewayNodeAttributeForm;
function showParallelGatewayNodeAttributeWin(cell,graph_refresh){
	reGetWidthAndHeight();
	if(lc_design_displaywin_for_edit){
		var eItems =eastPanel.items;
		for(var le = 0; le < eItems.length; le++){
			 if(le > 0){
				 eastPanel.remove(eItems.get(le),true);
			 }
		}
		parallelGatewayNodeAttributePanel(cell,graph_refresh);
		//放置eastPanel位置
		eastPanel.add(eastPanel.items.getCount(),parallelGatewayNodeAttributeTabPanel);
		basePanel.setHidden(true);
	}else{
		parallelGatewayNodeAttributePanel(cell,graph_refresh);
		parallelGatewayNodeAttributeWin = new Ext.Window({  
	         title:'配置并行网关属性',  
	         width:clientWidth*0.9, 
	         height:clientHeight*0.95,
	         resizable:true, 
	         modal:true,  
	         border:false,
	         closable:false, 
	         items:parallelGatewayNodeAttributeTabPanel,
	         buttons:[{  
	         	text:'确 定',  
	          	handler:function(){ 
	          		var graph = new mxGraph();
	          		graph.getModel().beginUpdate();
					try
					{
						//1通用基本配置并具有赋值功能
					 	if(node_normal_setvalue(cell,1)== false){
					 		return;
					 	}
					 	//2事件配置
					 	if(event_setvalue(cell)== false){
					 		return;
					 	}
						graph.startEditing();
						parallelGatewayNodeAttributeWin.close(this); 
					}
					finally
					{
						graph.getModel().endUpdate();
						graph_refresh.refresh();
					}
	          }  
	         }, {  
	          text:'取 消',  
	          handler:function(){  
	            parallelGatewayNodeAttributeWin.close();  
	          }  
	        }  
	      ]  
	     });  
	     parallelGatewayNodeAttributeWin.show(); 
	}
}

function editParallelGatewayNodeAttributeForm(cell){
}

function parallelGatewayNodeAttributePanel(cell,graph_refresh){
	reGetWidthAndHeight();
	if(lc_design_displaywin_for_edit){
		//基本配置与高级配置
		editParallelGatewayNodeAttributeForm(cell);
		//共用taskGrid属性事件
		event_task_grid(cell,1);
		//一般属性 参数1表示非开始2其他
		initNodeNormalForm(cell,1);
	    parallelGatewayNodeAttributeTabPanel = new Ext.TabPanel({
	        border:false,
	        activeTab:0,
	        height:clientHeight*0.95,
	        split:true, 
	        region:"center",
	        tabPosition:'left',
	        tabRotation:0,
	        items:[
	        	{title:'一般配置',items:nodeNormalForm,
	        		autoScroll:true,
	                /**新方法使用开始**/  
	                scrollable:true,  
	                scrollable:'x',
	                scrollable:'y',
	                /**新方法使用结束**/ 	
	        	},
	            {title:'事件配置',items:event_grid,layout:'border'}
	        ],
	         buttons:[{  
		         	text:'确 定',  
		          	handler:function(){ 
		          		var graph = new mxGraph();
		          		graph.getModel().beginUpdate();
						try
						{
							//1通用基本配置并具有赋值功能
						 	if(node_normal_setvalue(cell,1)== false){
						 		return;
						 	}
						 	//2事件配置
						 	if(event_setvalue(cell)== false){
						 		return;
						 	}
							graph.startEditing();
						}
						finally
						{
							graph.getModel().endUpdate();
							graph_refresh.refresh();
						}
		          }  
		         }
		      ]  
	    });
	}else{
		//基本配置与高级配置
		editParallelGatewayNodeAttributeForm(cell);
		//共用taskGrid属性事件
		event_task_grid(cell,1);
		//一般属性 参数1表示非开始2其他
		initNodeNormalForm(cell,1);
	    parallelGatewayNodeAttributeTabPanel = new Ext.TabPanel({
	        border:false,
	        activeTab:0,
	        height:clientHeight*0.95,
	        split:true, 
	        region:"center",
	        tabPosition:'left',
	        tabRotation:0,
	        items:[
	        	{title:'一般配置',items:nodeNormalForm},
	            {title:'事件配置',items:event_grid,layout:'border'}
	        ]
	    });
	}
}