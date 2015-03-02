/*
 * Copyright (C) 2015 raznara
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
package net.daw.helper.annotations;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import net.daw.helper.statics.MetaEnum;
import net.daw.helper.statics.MetaEnum.FieldType;

/**
 *
 * @author raznara
 */
@Retention(RetentionPolicy.RUNTIME)
//@Target(ElementType.TYPE)
public @interface FieldMetaInformation {
    public String UltraShortName() default "";
    public String ShortName() default "";
    public String Description() default "";
    public boolean IsIdForeignKey() default false;
    public boolean IsObjForeignKey() default false;
    public String ReferencesTable() default "";
    public MetaEnum.FieldType Type() default FieldType.String;  
    public int MaxLenght() default 255;
    public int MaxDecimal() default 2;
    public int MaxInteger() default 10;
    public String DefaultValue() default "";
    public boolean IsPathToObject() default false;
}
