package jehc.xtmodules.xtdao.impl;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;
import jehc.xtmodules.xtcore.base.impl.BaseDaoImpl;
import jehc.xtmodules.xtdao.Xt_Data_Authority_DefaultDao;
import jehc.xtmodules.xtmodel.Xt_Data_Authority_Default;

/**
* 数权限初始化默认设置 
* 2017-06-20 14:38:52  邓纯杰
*/
@Repository("xt_Data_Authority_DefaultDao")
public class Xt_Data_Authority_DefaultDaoImpl  extends BaseDaoImpl implements Xt_Data_Authority_DefaultDao{
	/**
	* 分页
	* @param condition 
	* @return
	*/
	@SuppressWarnings("unchecked")
	public List<Xt_Data_Authority_Default> getXtDataAuthorityDefaultListByCondition(Map<String,Object> condition){
		return (List<Xt_Data_Authority_Default>)this.getList("getXtDataAuthorityDefaultListByCondition",condition);
	}
	/**
	* 查询对象
	* @param xt_data_authority_default_id 
	* @return
	*/
	public Xt_Data_Authority_Default getXtDataAuthorityDefaultById(String xt_data_authority_default_id){
		return (Xt_Data_Authority_Default)this.get("getXtDataAuthorityDefaultById", xt_data_authority_default_id);
	}
	/**
	* 添加
	* @param xt_data_authority_default 
	* @return
	*/
	public int addXtDataAuthorityDefault(Xt_Data_Authority_Default xt_Data_Authority_Default){
		return this.add("addXtDataAuthorityDefault", xt_Data_Authority_Default);
	}
	/**
	* 修改
	* @param xt_data_authority_default 
	* @return
	*/
	public int updateXtDataAuthorityDefault(Xt_Data_Authority_Default xt_Data_Authority_Default){
		return this.update("updateXtDataAuthorityDefault", xt_Data_Authority_Default);
	}
	/**
	* 修改（根据动态条件）
	* @param xt_data_authority_default 
	* @return
	*/
	public int updateXtDataAuthorityDefaultBySelective(Xt_Data_Authority_Default xt_Data_Authority_Default){
		return this.update("updateXtDataAuthorityDefaultBySelective", xt_Data_Authority_Default);
	}
	/**
	* 删除
	* @param condition 
	* @return
	*/
	public int delXtDataAuthorityDefault(Map<String,Object> condition){
		return this.del("delXtDataAuthorityDefault", condition);
	}
	/**
	* 批量添加
	* @param xt_data_authority_defaultList 
	* @return
	*/
	public int addBatchXtDataAuthorityDefault(List<Xt_Data_Authority_Default> xt_Data_Authority_DefaultList){
		return this.add("addBatchXtDataAuthorityDefault", xt_Data_Authority_DefaultList);
	}
	/**
	* 批量修改
	* @param xt_data_authority_defaultList 
	* @return
	*/
	public int updateBatchXtDataAuthorityDefault(List<Xt_Data_Authority_Default> xt_Data_Authority_DefaultList){
		return this.update("updateBatchXtDataAuthorityDefault", xt_Data_Authority_DefaultList);
	}
	/**
	* 批量修改（根据动态条件）
	* @param xt_data_authority_defaultList 
	* @return
	*/
	public int updateBatchXtDataAuthorityDefaultBySelective(List<Xt_Data_Authority_Default> xt_Data_Authority_DefaultList){
		return this.update("updateBatchXtDataAuthorityDefaultBySelective", xt_Data_Authority_DefaultList);
	}
}
