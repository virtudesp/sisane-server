/*
 * Copyright (C) 2015 rafa
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
package net.daw.bean.meta;

import com.google.gson.annotations.Expose;
import net.daw.helper.statics.MetaEnum;

/**
 *
 * @author rafa
 */
public class MetaBeanGenImpl {

    @Expose
    private String Name = "";
    @Expose
    private String UltraShortName = "";
    @Expose
    private String ShortName = "";

    
    @Expose
    private String Description = "";

    @Expose
    private boolean IsId = false;
    @Expose
    private boolean IsIdForeignKey = false;
    @Expose
    private boolean IsObjForeignKey = false;
    @Expose
    private boolean IsMetaForeignKey = false;

    @Expose
    private String MyObjName = "";
    @Expose
    private String MyMetaName = "";
    @Expose
    private String MyIdName = "";
    @Expose
    private String ReferencesTable = "";
    
    
    
//    private String ForeignKeyDescription1 = "";
//    private String ForeignKeyDescription2 = "";
//    private String ForeignKeyDescription3 = "";
    @Expose
    private boolean IsForeignKeyDescriptor = false;

    private MetaEnum.FieldType Type = MetaEnum.FieldType.String;
    private int MaxLength = 255;
    private int MinLength = 0;
    private int MaxDecimal = 2;
    private int MaxInteger = 10;
    private String DefaultValue = "";
    private boolean IsPathToObject = false;

    public String getUltraShortName() {
        return UltraShortName;
    }

    public void setUltraShortName(String UltraShortName) {
        this.UltraShortName = UltraShortName;
    }

    public String getShortName() {
        return ShortName;
    }

    public void setShortName(String ShortName) {
        this.ShortName = ShortName;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String Description) {
        this.Description = Description;
    }

    public boolean isIsId() {
        return IsId;
    }

    public void setIsId(boolean IsId) {
        this.IsId = IsId;
    }

    public boolean isIsIdForeignKey() {
        return IsIdForeignKey;
    }

    public void setIsIdForeignKey(boolean IsIdForeignKey) {
        this.IsIdForeignKey = IsIdForeignKey;
    }

    public boolean isIsObjForeignKey() {
        return IsObjForeignKey;
    }

    public void setIsObjForeignKey(boolean IsObjForeignKey) {
        this.IsObjForeignKey = IsObjForeignKey;
    }

 

    public String getReferencesTable() {
        return ReferencesTable;
    }

    public void setReferencesTable(String ReferencesTable) {
        this.ReferencesTable = ReferencesTable;
    }

    public MetaEnum.FieldType getType() {
        return Type;
    }

    public void setType(MetaEnum.FieldType Type) {
        this.Type = Type;
    }

    public int getMaxLength() {
        return MaxLength;
    }

    public void setMaxLength(int MaxLength) {
        this.MaxLength = MaxLength;
    }

    public int getMinLength() {
        return MinLength;
    }

    public void setMinLength(int MinLength) {
        this.MinLength = MinLength;
    }

    public int getMaxDecimal() {
        return MaxDecimal;
    }

    public void setMaxDecimal(int MaxDecimal) {
        this.MaxDecimal = MaxDecimal;
    }

    public int getMaxInteger() {
        return MaxInteger;
    }

    public void setMaxInteger(int MaxInteger) {
        this.MaxInteger = MaxInteger;
    }

    public String getDefaultValue() {
        return DefaultValue;
    }

    public void setDefaultValue(String DefaultValue) {
        this.DefaultValue = DefaultValue;
    }

    public boolean isIsPathToObject() {
        return IsPathToObject;
    }

    public void setIsPathToObject(boolean IsPathToObject) {
        this.IsPathToObject = IsPathToObject;
    }

    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public boolean isIsMetaForeignKey() {
        return IsMetaForeignKey;
    }

    public void setIsMetaForeignKey(boolean IsMetaForeignKey) {
        this.IsMetaForeignKey = IsMetaForeignKey;
    }

    public void setIsForeignKeyDescriptor(boolean ForeignKeyDescriptor) {
        this.IsForeignKeyDescriptor = ForeignKeyDescriptor;
    }

    public boolean isIsForeignKeyDescriptor() {
        return IsForeignKeyDescriptor;
    }

    public String getMyObjName() {
        return MyObjName;
    }

    public void setMyObjName(String MyObjName) {
        this.MyObjName = MyObjName;
    }

    public String getMyMetaName() {
        return MyMetaName;
    }

    public void setMyMetaName(String MyMetaName) {
        this.MyMetaName = MyMetaName;
    }

    public String getMyIdName() {
        return MyIdName;
    }

    public void setMyIdName(String MyIdName) {
        this.MyIdName = MyIdName;
    }
}
