//返回r
function goback(){
	tlocation("../xtNoticeController/loadXtNotice");
}
$('#defaultForm').bootstrapValidator({
	message:'此值不是有效的'
});
//保存
function addXtNotice(){
	submitBForm('defaultForm','../xtNoticeController/addXtNotice','../xtNoticeController/loadXtNotice');
}
/**初始化附件右键菜单开始 参数4为1表示拥有上传和删除功能 即新增和编辑页面使用**/
initBFileRight('xt_attachment_id','xt_attachment_id_pic',1);
initBFileRight('xt_attachment_id_','xt_attachment_id__pic',1);
/**初始化附件右键菜单结束**/

