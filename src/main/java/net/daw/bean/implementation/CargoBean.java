package net.daw.bean.implementation;

import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import net.daw.bean.publicinterface.GenericBean;
import net.daw.dao.implementation.DocumentoDao;
import net.daw.dao.implementation.EpisodioDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class CargoBean implements GenericBean {

    @Expose
    private int id;
    
    @Expose
    private Date date;
    
    @Expose(serialize = false)
    private int id_episodio;
    
    @Expose(serialize = false)
    private int id_documento;
    
    @Expose(deserialize = false)
    private DocumentoBean obj_documento;
    
    @Expose(deserialize = false)
    private EpisodioBean obj_episodio;

    public CargoBean(int id) {
        this.id = id;
    }

    public CargoBean() {
        this.id = 0;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getFecha() {
        return date;
    }

    public void setFecha(Date date) {
        this.date = date;
    }

    public int getId_episodio() {
        return id_episodio;
    }

    public void setId_episodio(int id_episodio) {
        this.id_episodio = id_episodio;
    }
    
    public int getId_documento() {
        return id_documento;
    }

    public void setId_documento(int id_documento) {
        this.id_documento = id_documento;
    }

    public DocumentoBean getObj_documento() {
        return obj_documento;
    }

    public void setObj_documento(DocumentoBean obj_documento) {
        this.obj_documento = obj_documento;
    }
    
    public EpisodioBean getObj_episodio() {
        return obj_episodio;
    }

    public void setObj_episodio(EpisodioBean obj_episodio) {
        this.obj_episodio = obj_episodio;
    }
    
    @Override
    public String getColumns() {
        return "id,date,id_episodio,id_documento";
    }

    @Override
    public String getValues() {
        String values = "";
        values += id + ",";
        values += EncodingUtilHelper.stringifyAndQuotate(date) + ",";
        values += id_episodio + ",";
        values += id_documento;

        return values;
    }

    @Override
    public String toPairs() {
        String pairs;
        pairs = "id = " + id + ",";
        pairs += "date = " + EncodingUtilHelper.stringifyAndQuotate(date) + ",";
        pairs += "id_episodio = " + id_episodio + ",";
        pairs += "id_documento = " + id_documento;

        return pairs;
    }

    @Override
    public CargoBean fill(ResultSet oResultSet, Connection pooledConnection, PusuarioBean oPusuarioBean_security, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setFecha(oResultSet.getDate("date"));

        if(expand > 0){
            EpisodioDao eDao = new EpisodioDao(pooledConnection,oPusuarioBean_security);
            EpisodioBean eBean = new EpisodioBean();
            eBean.setId(this.id_episodio);
            this.id_episodio = oResultSet.getInt("id_episodio");
            this.obj_episodio = eDao.get(eBean,expand - 1);

            DocumentoDao tDao = new DocumentoDao(pooledConnection,oPusuarioBean_security);
            DocumentoBean tBean = new DocumentoBean();
            tBean.setId(this.id_documento);
            this.id_documento = oResultSet.getInt("id_documento");
            this.obj_documento = tDao.get(tBean,expand - 1);
        }
        return this;
    }

}
