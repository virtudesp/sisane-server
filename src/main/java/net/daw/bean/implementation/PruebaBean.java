/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean.implementation;

import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import net.daw.bean.publicinterface.GenericBean;
import net.daw.dao.implementation.AnaliticaDao;
import net.daw.dao.implementation.EpisodioDao;
import net.daw.dao.implementation.ImagenDao;
import net.daw.helper.statics.EncodingUtilHelper;

/**
 *
 * @author a003153722p
 */
public class PruebaBean implements GenericBean {

    @Expose
    private Integer id = 0;
    @Expose
    private String informe;
    @Expose
    private Date fecha_peticion;
    @Expose
    private Double importe;

    @Expose(serialize = false)
    private Integer id_episodio = 0;
    @Expose(deserialize = false)
    private EpisodioBean obj_episodio = null;
    @Expose(serialize = false)
    private Integer id_imagen = 0;
    @Expose(deserialize = false)
    private ImagenBean obj_imagen = null;
    @Expose(serialize = false)
    private Integer id_analitica = 0;
    @Expose(deserialize = false)
    private AnaliticaBean obj_analitica = null;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getInforme() {
        return informe;
    }

    public void setInforme(String informe) {
        this.informe = informe;
    }

    public Date getFechaPeticion() {
        return fecha_peticion;
    }

    public void setFechaPeticion(Date fecha_peticion) {
        this.fecha_peticion = fecha_peticion;
    }

    public Double getImporte() {
        return importe;
    }

    public void setImporte(Double importe) {
        this.importe = importe;
    }

    public Integer getId_episodio() {
        return id_episodio;
    }

    public void setId_episodio(Integer id_episodio) {
        this.id_episodio = id_episodio;
    }

    public EpisodioBean getObj_episodio() {
        return obj_episodio;
    }

    public void setObj_episodio(EpisodioBean obj_episodio) {
        this.obj_episodio = obj_episodio;
    }

    public Integer getId_imagen() {
        return id_imagen;
    }

    public void setId_imagen(Integer id_imagen) {
        this.id_imagen = id_imagen;
    }

    public ImagenBean getObj_imagen() {
        return obj_imagen;
    }

    public void setObj_imagen(ImagenBean obj_imagen) {
        this.obj_imagen = obj_imagen;
    }

    public Integer getId_analitica() {
        return id_analitica;
    }

    public void setId_analitica(Integer id_analitica) {
        this.id_analitica = id_analitica;
    }

    public AnaliticaBean getObj_analitica() {
        return obj_analitica;
    }

    public void setObj_analitica(AnaliticaBean obj_analitica) {
        this.obj_analitica = obj_analitica;
    }

    public PruebaBean() {
    }

    public PruebaBean(Integer id) {
        this.id = id;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "informe,";
        strColumns += "fecha_peticion,";
        strColumns += "id_episodio,";
        strColumns += "importe,";
        strColumns += "id_imagen,";
        strColumns += "id_analitica";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += EncodingUtilHelper.quotate(informe) + ",";
        strColumns += EncodingUtilHelper.stringifyAndQuotate(fecha_peticion) + ",";
        strColumns += id_episodio + ",";
        strColumns += importe + ",";
        strColumns += id_imagen + ",";
        strColumns += id_analitica;
        return strColumns;
    }

    @Override
    public String toPairs() {
        String strPairs = "";
        //strPairs += "id=" + id + ",";
        strPairs += EncodingUtilHelper.quotate(informe) + ",";
        strPairs += EncodingUtilHelper.stringifyAndQuotate(fecha_peticion) + ",";
        strPairs += id_episodio + ",";
        strPairs += importe + ",";
        strPairs += id_imagen + ",";
        strPairs += id_analitica;
        return strPairs;
    }

    @Override
    public GenericBean fill(ResultSet oResultSet, Connection pooledConnection, PusuarioBean oPusuarioBean_security, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setInforme(oResultSet.getString("informe"));
        this.setFechaPeticion(oResultSet.getDate("fecha_peticion"));
        this.setImporte(oResultSet.getDouble("importe"));

        if (expand > 0) {
            EpisodioBean oEpisodioBean = new EpisodioBean();
            EpisodioDao oEpisodioDao = new EpisodioDao(pooledConnection, oPusuarioBean_security);
            oEpisodioBean.setId(oResultSet.getInt("id_episodio"));
            oEpisodioBean = oEpisodioDao.get(oEpisodioBean, expand - 1);
            this.setObj_episodio(oEpisodioBean);
        } else {
            this.setId_episodio(oResultSet.getInt("id_episodio"));
        }

        if (expand > 0) {
            ImagenBean oImagenBean = new ImagenBean();
            ImagenDao oImagenDao = new ImagenDao(pooledConnection, oPusuarioBean_security);
            oImagenBean.setId(oResultSet.getInt("id_imagen"));
            oImagenBean = oImagenDao.get(oImagenBean, expand - 1);
            this.setObj_imagen(oImagenBean);
        } else {
            this.setId_imagen(oResultSet.getInt("id_imagen"));
        }

        if (expand > 0) {
            AnaliticaBean oAnaliticaBean = new AnaliticaBean();
            AnaliticaDao oAnaliticaDao = new AnaliticaDao(pooledConnection, oPusuarioBean_security);
            oAnaliticaBean.setId(oResultSet.getInt("id_analitica"));
            oAnaliticaBean = oAnaliticaDao.get(oAnaliticaBean, expand - 1);
            this.setObj_analitica(oAnaliticaBean);
        } else {
            this.setId_analitica(oResultSet.getInt("id_analitica"));
        }

        return this;
    }

}
