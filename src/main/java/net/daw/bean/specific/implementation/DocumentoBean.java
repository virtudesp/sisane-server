/*
 * Copyright (C) July 2014 Rafael Aznar
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.bean.specific.implementation;

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;
import java.util.ArrayList;
import java.util.Date;
import net.daw.bean.group.GroupBeanImpl;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.annotations.TableSourceMetaInformation;
import net.daw.helper.statics.MetaEnum;

@TableSourceMetaInformation(
        TableName = "documento",
        Description = "Documento"
)
public class DocumentoBean extends BeanGenImpl implements BeanInterface {

    public DocumentoBean() {
    }

    public DocumentoBean(Integer id) {
        super(id);
    }

    @Expose
    @MethodMetaInformation(
            UltraShortName = "Tít.",
            ShortName = "Título",
            Description = "Título del documento",
            Type = MetaEnum.FieldType.String,
            MinLength = 1,
            MaxLength = 255,
            DefaultValue = "Sin título",
            IsForeignKeyDescriptor = true
    )
    private String titulo = "";

    @Expose
    @MethodMetaInformation(
            UltraShortName = "Cont.",
            ShortName = "Contenido",
            Description = "Cuerpo del documento",
            Type = MetaEnum.FieldType.String,
            MinLength = 1,
            MaxLength = 999999999,
            DefaultValue = "Sin contenido"
            
    )
    private String contenido = "";

    @Expose
    @MethodMetaInformation(
            UltraShortName = "F.alta",
            ShortName = "Fecha de alta",
            Description = "Fecha de creación del documento",
            Type = MetaEnum.FieldType.Date,
            DefaultValue = "01/01/2000",
            IsForeignKeyDescriptor = true
    )
    private Date alta = new Date();

    @Expose
    @MethodMetaInformation(
            UltraShortName = "F.mod.",
            ShortName = "Fecha de modificación",
            Description = "Fecha de la última modificación del documento",
            Type = MetaEnum.FieldType.Date,
            DefaultValue = "01/01/2000"
    )
    private Date cambio = new Date();

    @Expose
    @MethodMetaInformation(
            UltraShortName = "Hits",
            ShortName = "Hits",
            Description = "Número de visitas del documento",
            Type = MetaEnum.FieldType.Integer
    )
    private Integer hits = 0;

    @Expose(serialize = false)
    @MethodMetaInformation(
            UltraShortName = "Usuario",
            ShortName = "Usuario",
            Description = "Identificador de Usuario",
            IsIdForeignKey = true,
            ReferencesTable = "usuario"
    )
    private Integer id_usuario = 0; //importante inicializar a 0 las claves ajenas

    @Expose(deserialize = false)
    @MethodMetaInformation(
            UltraShortName = "Usuario",
            ShortName = "Usuario",
            Description = "Referencia al usuario propietario",
            IsObjForeignKey = true,            
            ReferencesTable = "usuario",
            MyIdName = "id_usuario",
            MyMetaName = "meta_usuario"
    //            ForeignKeyDescription1="login",
    //            ForeignKeyDescription2="ciudad"
    )
    private GroupBeanImpl obj_usuario = null;

//    @Expose(deserialize = false)
//    @MethodMetaInformation(
//            IsMetaForeignKey = true,
//            ReferencesTable = "usuario",
//            MyIdName = "id_usuario",
//            MyObjName = "obj_usuario"
//    )
//    private ArrayList<MetaBeanGenImpl> meta_usuario = null;

    @Expose(serialize = false)
    @MethodMetaInformation(
            UltraShortName = "Tipo",
            ShortName = "Tipo de documento",
            Description = "Identificador de tipo de documento",
            IsIdForeignKey = true,
            ReferencesTable = "tipodocumento"
    )
    private Integer id_tipodocumento = 0; //importante inicializar a 0 las claves ajenas

    @Expose(deserialize = false)
    @MethodMetaInformation(
            UltraShortName = "Tipo",
            ShortName = "Tipo de documento",
            Description = "Referencia al tipo de documento",
            IsObjForeignKey = true,
            ReferencesTable = "tipodocumento",
            MyIdName = "id_tipodocumento",
            MyMetaName = "meta_tipodocumento"
    //            ForeignKeyDescription1="descripcion"
    )
    private GroupBeanImpl obj_tipodocumento = null;

//    @Expose(deserialize = false)
//    @MethodMetaInformation(
//            UltraShortName = "Tipo",
//            IsMetaForeignKey = true,
//            ReferencesTable = "tipodocumento",
//            MyIdName = "id_tipodocumento",
//            MyObjName = "obj_tipodocumento"
//    )
//    private ArrayList<MetaBeanGenImpl> meta_tipodocumento = null;

    @Expose
    @MethodMetaInformation(
            UltraShortName = "Etiq.",
            ShortName = "Etiquetas",
            Description = "Etiquetas del documento",
            Type = MetaEnum.FieldType.String,
            MinLength = 0,
            MaxLength = 255,
            DefaultValue = ""
    )
    private String etiquetas = "";

    @Expose
    @MethodMetaInformation(
            UltraShortName = "¿Pub?",
            ShortName = "¿Publicado?",
            Description = "¿El documento ha sido publicado?",
            Type = MetaEnum.FieldType.Boolean,
            DefaultValue = "0"
    )
    private Boolean publicado = false;

    @Expose
    @MethodMetaInformation(
            UltraShortName = "¿Ptd?",
            ShortName = "¿Portada?",
            Description = "¿El documento es portada?",
            Type = MetaEnum.FieldType.Boolean,
            DefaultValue = "0"
    )
    private Boolean portada = false;

    @Expose
    @MethodMetaInformation(
            UltraShortName = "¿Dst?",
            ShortName = "¿Destacado?",
            Description = "¿El documento debe ser destacado?",
            Type = MetaEnum.FieldType.Boolean,
            DefaultValue = "0"
    )
    private Boolean destacado = false;

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) throws Exception {
        this.contenido = contenido;
    }

//     public String getPresentacion() {
//        return presentacion;
//    }
//
//    public void setPresentacion(String contenidoParseado) {
//        this.presentacion = contenidoParseado;
//    }
    public Date getAlta() {
        return alta;
    }

    public void setAlta(Date fecha) {
        this.alta = fecha;
    }

    public Date getCambio() {
        return cambio;
    }

    public void setCambio(Date fecha) {
        this.cambio = fecha;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Integer getId_tipodocumento() {
        return id_tipodocumento;
    }

    public void setId_tipodocumento(Integer id_tipodocumento) {
        this.id_tipodocumento = id_tipodocumento;
    }

    public String getEtiquetas() {
        return etiquetas;
    }

    public void setEtiquetas(String etiquetas) {
        this.etiquetas = etiquetas;
    }

    public Boolean getPublicado() {
        return publicado;
    }

    public void setPublicado(Boolean publicado) {
        this.publicado = publicado;
    }

    public Boolean getPortada() {
        return portada;
    }

    public void setPortada(Boolean portada) {
        this.portada = portada;
    }

    public Boolean getDestacado() {
        return destacado;
    }

    public void setDestacado(Boolean destacado) {
        this.destacado = destacado;
    }

    public GroupBeanImpl getObj_usuario() {
        return obj_usuario;
    }

    public void setObj_usuario(GroupBeanImpl obj_usuario) {
        this.obj_usuario = obj_usuario;
    }

    public GroupBeanImpl getObj_tipodocumento() {
        return obj_tipodocumento;
    }

    public void setObj_tipodocumento(GroupBeanImpl obj_tipodocumento) {
        this.obj_tipodocumento = obj_tipodocumento;
    }

  
    
}
