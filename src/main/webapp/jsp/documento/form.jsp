

<%@page import="net.daw.helper.statics.MetaEnum"%>
<%@page import="java.lang.reflect.Field"%>
<%@page import="net.daw.helper.annotations.MethodMetaInformation"%>
<%@page import="java.lang.annotation.Annotation"%>
<%@page import="net.daw.helper.annotations.TableSourceMetaInformation"%>
<%@page import="net.daw.bean.generic.implementation.BeanGenImpl"%>
<%@page import="net.daw.bean.publicinterface.BeanInterface"%>
<%@page import="java.lang.reflect.Method"%>
<%@page import="java.lang.reflect.ParameterizedType"%>
<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>

<form class="form-horizontal" role="form" action="#" id="documentoForm" name="formulario">

    <%!
        public Integer getInputTypeTextLenght(int intMaxLenght) {
            if (intMaxLenght <= 255) {
                if (intMaxLenght <= 200) {
                    if (intMaxLenght <= 150) {
                        if (intMaxLenght <= 100) {
                            if (intMaxLenght <= 50) {
                                if (intMaxLenght <= 25) {
                                    return 3;
                                } else {
                                    return 4;
                                }
                            } else {
                                return 5;
                            }
                        } else {
                            return 6;
                        }
                    } else {
                        return 7;
                    }
                } else {
                    return 8;
                }
            } else {
                return 9;
            }
        }

        public String getInputTypeText(Field field, MethodMetaInformation methodAnnotation) {
            Integer controlWidth = 3;
            if (methodAnnotation.Type().equals(MetaEnum.FieldType.String)) {
                controlWidth = getInputTypeTextLenght(methodAnnotation.MaxLenght());
            }
            String strHtml = ("<div id=\"" + field.getName() + "-group\" class=\"form-group  has-success has-feedback\">"
                    + "<label class=\"col-sm-2 control-label\"  for=\"" + field.getName() + "\">" + methodAnnotation.ShortName() + ":</label>"
                    + "<div class=\"control col-sm-" + controlWidth.toString() + "\">    "
                    + "<input type=\"text\" id=\"" + field.getName() + "\" class=\"form-control\"  name=\"" + field.getName() + "\" size=\"15\" placeholder=\"" + field.getName() + "\" />"
                    + "</div>"
                    + "</div>");
            return strHtml;
        }

        public String getInputTypeInteger(Field field, MethodMetaInformation methodAnnotation) {
            Integer controlWidth = 3;
            if (methodAnnotation.Type().equals(MetaEnum.FieldType.Integer)) {
                controlWidth = getInputTypeTextLenght(Integer.toString(methodAnnotation.MaxInteger()).length());
            }
            String strHtml = ("<div id=\"" + field.getName() + "-group\" class=\"form-group  has-success has-feedback\">"
                    + "<label class=\"col-sm-2 control-label\"  for=\"" + field.getName() + "\">" + methodAnnotation.ShortName() + ":</label>"
                    + "<div class=\"control col-sm-" + controlWidth.toString() + "\">    "
                    + "<input type=\"text\" id=\"" + field.getName() + "\" class=\"form-control\"  name=\"" + field.getName() + "\" size=\"15\" placeholder=\"" + field.getName() + "\" />"
                    + "</div>"
                    + "</div>");
            return strHtml;
        }

        public String getInputTypeDate(Field field, MethodMetaInformation methodAnnotation) {
            Integer controlWidth = 3;
            String strHtml = ("<div id=\"" + field.getName() + "-group\" class=\"form-group\">"
                    + "<label class=\"col-sm-2 control-label\" for=\"" + field.getName() + "\">" + methodAnnotation.ShortName() + "</label>"
                    + "<div class=\"col-sm-" + controlWidth.toString() + "\">"
                    + "<div class=\"input-group date\" id=\"" + field.getName() + "_group\">"
                    + "<input type=\"text\" class=\"form-control\" id=\"" + field.getName() + "\" name=\"" + field.getName() + "_group\" placeholder=\"" + methodAnnotation.UltraShortName() + "\" />"
                    + "<span class=\"input-group-addon\">"
                    + "<span class=\"glyphicon glyphicon-calendar\"></span>"
                    + "</span>"
                    + "</div>"
                    + "</div>"
                    + "</div>\n");
            strHtml += "jQuery(function ($) {"
                    + "$('#" + field.getName() + "').datetimepicker({"
                    + "pickTime: false,"
                    + "language: 'es',"
                    + "showToday: true"
                    + "});"
                    + "});";
            return strHtml;
        }

        public String getCheckBox(Field field, MethodMetaInformation methodAnnotation) {
            String strHtml = ("<div id=\"" + field.getName() + "-group\" <div class=\"form-group\">"
                    + "<label class=\"col-sm-2 control-label\"  for=\"" + field.getName() + "\">" + methodAnnotation.ShortName() + "</label>"
                    + "<div class=\"col-sm-1\">"
                    + "<input type=\"checkbox\" id=\"" + field.getName() + "\" name=\"" + field.getName() + "\" value=\"true\" />"
                    + "</div>"
                    + "</div>");
            return strHtml;
        }

        public String getForeign(Field field, MethodMetaInformation methodAnnotation) {
            Integer controlWidth = 3;
            String strHtml = ("<div class=\"form-group\">"
                    + "<label class=\"col-sm-2 control-label\" for=\"obj_" + field.getName() + "_id\">" + methodAnnotation.ShortName() + "</label>"
                    + "<div class=\"col-sm-2\">"
                    + "<input readonly=\"true\"  class=\"form-control\"  id=\"obj_" + field.getName() + "_id\" class=\"input-mini\" name=\"id_" + field.getName() + "\" type=\"text\" size=\"5\" maxlength=\"5\" />"
                    + "</div>"
                    + "<div class=\"col-sm-1\">"
                    + "<a class=\"btn btn-primary btn-sm\" id=\"obj_" + field.getName() + "_button\" href=\"#\"><i class=\"glyphicon glyphicon-search\"></i></a>"
                    + "</div>"
                    + "<label class=\"col-sm-7\" for=\"obj_" + field.getName() + "_desc\" id=\"obj_" + field.getName() + "_desc\"></label>"
                    + "</div>");
            return strHtml;

        }


    %>
    <%

        BeanGenImpl oGenericBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation.DocumentoBean").newInstance();
        Class tipo = oGenericBean.getClass();

        out.print("******" + tipo.getName() + "******<br />");

        Annotation[] classAnnotations = tipo.getDeclaredAnnotations();
        for (int i = 0; i < classAnnotations.length; i++) {
            TableSourceMetaInformation tableAnnotation = (TableSourceMetaInformation) classAnnotations[i];
            out.print("<h3>Formulario de " + tableAnnotation.Description() + "</h3>");
            out.print("----Description (" + tableAnnotation.Description() + ")<br />");
            out.print("----Table name (" + tableAnnotation.TableName() + ")<br />");
            out.print("<br />");
            out.print("<br />");
        }

        for (Field field : tipo.getDeclaredFields()) {
            Class type = field.getType();
            String name = field.getName();
            //out.print("* " + field.getName() + "(" + field.getType() + ")<br />");
            Annotation[] methodAnnotations = field.getDeclaredAnnotations();
            out.print(field.getName() + " (" + String.valueOf(methodAnnotations.length) + ")<br />");

            for (Integer i = 0; i < methodAnnotations.length; i++) {
                //    MethodMetaInformation methodAnnotation = (MethodMetaInformation) methodAnnotations[i];
                if (methodAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                    out.print(" " + i.toString() + " (" + methodAnnotations[i].annotationType().toString() + ")<br />");
                    MethodMetaInformation methodAnnotation = (MethodMetaInformation) methodAnnotations[i];

                    out.print("    " + i.toString() + " (" + methodAnnotation.ShortName() + ")<br />");
                    out.print("    " + i.toString() + " (" + methodAnnotation.Type().toString() + ")<br />");

                    if (methodAnnotation.IsIdForeignKey() == false && methodAnnotation.IsObjForeignKey() == false) {
                        if (methodAnnotation.Type().equals(MetaEnum.FieldType.String)) {
                            out.print(getInputTypeText(field, methodAnnotation));
                        }
                        if (methodAnnotation.Type().equals(MetaEnum.FieldType.Boolean)) {
                            out.print(getCheckBox(field, methodAnnotation));
                        }
                        if (methodAnnotation.Type().equals(MetaEnum.FieldType.Integer)) {
                            out.print(getInputTypeInteger(field, methodAnnotation));
                        }
                        if (methodAnnotation.Type().equals(MetaEnum.FieldType.Date)) {
                            out.print(getInputTypeDate(field, methodAnnotation));

                        }
                    } else {
                        if (methodAnnotation.IsObjForeignKey() == false) {
                            out.print(getForeign(field, methodAnnotation));
                        }
                    }

                }

            }
        }

//        for (Method method : tipo.getMethods()) {
//            if (method.getName().substring(0, 3).equalsIgnoreCase("set")) {
//                TableSourceMetaInformation a = (TableSourceMetaInformation) tipo.getAnnotation(TableSourceMetaInformation.class);
//
//                out.print("* " + method.getName() + "(" + a.Description() + ")<br />");
//
//                Annotation[] methodAnnotations = method.getDeclaredAnnotations();
//                out.print("  " + method.getName() + "(" + methodAnnotations.length + ")<br />");
//                //MethodMetaInformation b = method.getAnnotation(MethodMetaInformation.class);
//                for (int i = 0; i < methodAnnotations.length; i++) {
//                    MethodMetaInformation methodAnnotation = (MethodMetaInformation) methodAnnotations[i];
//                    out.print("  " + method.getName() + "(" + methodAnnotation.Description() + ")<br />");
//                }
//
//            }
//        }
        out.print("<br />");

    %>

    <hr class="colorgraph">

    <div id="id-group" class="form-group has-error has-feedback">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="control col-sm-2">            
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />            
        </div>
    </div>

    <div id="titulo-group" class="form-group  has-success has-feedback">
        <label class="col-sm-2 control-label"  for="titulo">Titulo:</label>
        <div class="control col-sm-6">                        
            <input type="text" id="titulo" class="form-control"  name="titulo" size="15" placeholder="titulo" />
        </div>
    </div>

    <div id="contenido-group" class="form-group  has-success has-feedback">
        <label class="col-sm-2 control-label" for="contenido">Contenido:</label>
        <div class="control col-sm-9">
            <textarea type="text"  class="form-control pull-left"  id="contenido" name="contenido" size="15" placeholder="contenido"></textarea>
        </div>
        <div class="col-sm-1">
            <a class="btn btn-primary btn-sm" id="contenido_button" href="#"><i class="glyphicon glyphicon-pencil"></i></a>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="alta_group">Alta:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='alta_group'>
                <input type='text' class="form-control" id='alta' name="alta_group" placeholder="Fecha de alta" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="cambio_group">Cambio:</label> 
        <div class="col-sm-3">      
            <div class='input-group date' id='cambio_group'>
                <input type='text' class="form-control" id='cambio' name="cambio_group" placeholder="Fecha de cambio" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="hits">Hits:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="hits" name="hits" size="15" placeholder="hits" />
        </div>
    </div>



    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_usuario_id">Usuario: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_usuario_id" class="input-mini" name="id_usuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_usuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_usuario_desc"></label>                     
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tipodocumento_id">Tipo de documento: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_tipodocumento_id" class="input-mini" name="id_tipodocumento" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tipodocumento_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_tipodocumento_desc"></label>                     
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="etiquetas">Etiquetas:</label>
        <div class="col-sm-10">
            <input type="text"  class="form-control"  id="etiquetas" name="etiquetas" size="15" placeholder="etiquetas" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="publicado">Publicado:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="publicado" name="publicado" value="true" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="portada">Portada:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="portada" name="portada" value="true" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="destacado">Destacado:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="portada" name="destacado" value="true" />
        </div>
    </div> 

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>



<script type="text/javascript">
    jQuery(function ($) {
        $('#alta_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        $('#cambio_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        $.fn.resetValidationForm = function () {
            //pendiente

        }
        //limpieza
        function resetValidationForm() {
            $(".feedback").remove();
            $(".form-group").removeClass("has-success");
            $(".form-group").removeClass("has-error");
            $(".form-group").removeClass("has-feedback");
        }

        function resetValidationControl(strIdAttr) {
            $("#" + strIdAttr + "-group .feedback").remove();
            $("#" + strIdAttr + "-group").removeClass("has-success");
            $("#" + strIdAttr + "-group").removeClass("has-error");
            $("#" + strIdAttr + "-group").removeClass("has-feedback");
        }

        function showValidationErrorControl(strIdAttr, strMsg) {
            $("#" + strIdAttr + "-group").addClass("has-error");
            $("#" + strIdAttr + "-group").addClass("has-feedback");
            $("#" + strIdAttr + "-group .control").append('<span class="feedback glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
            $("#" + strIdAttr + "-group .control").append('<span class="feedback control-label" for="id">' + strMsg + '</span>');
        }

        function showValidationOKControl(strIdAttr) {
            $("#" + strIdAttr + "-group").addClass("has-success");
            $("#" + strIdAttr + "-group").addClass("has-feedback");
            $("#" + strIdAttr + "-group .control").append('<span class="feedback glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
        }








        //marcar un error
        //$("#id-group").addClass("has-error");
        //$("#id-group").addClass("has-feedback");
        //$("#id-group .control").append('<span class="feedback glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        //$("#id-group .control").append('<span class="feedback control-label" for="id">xxxxxxxxxxxxxxx</span>');

        //marcar uno correcto
        //$("#titulo-group").addClass("has-success");
        //$("#titulo-group").addClass("has-feedback");
        //$("#titulo-group .control").append('<span class="feedback glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');



        //$("form #contenido-group")






        $.fn.validateLength = function (intMaxLength) {
            if (this.val().length > intMaxLength) {
                validate = false;
            }
            return this;
        };

        function validateNotempty(strString) {
            if (strString) {
                return true
            } else {
                return false;
            }
        }

        function validateEmail(strString) {
            var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
            if (pattern.test(strString)) {
                return true;
            } else {
                return false;
            }
        }

        function validateMaxLenght(intMaxLength, strString) {
            if (strString.length > intMaxLength) {
                return false;
            } else {
                return true;
            }
        }

        function validateMinLenght(intMinLength, strString) {
            if (strString.length < intMinLength) {
                return false;
            } else {
                return true;
            }
        }

        function validateSpanishDate(strDate) {
            if (strDate != undefined && strDate.value != "") {
                strDate = strDate.replace(/-/g, '/');
                var expreg = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/;
                if (!expreg.test(strDate)) {
                    return false;
                }
                var intYear = parseInt(strDate.substring(0, 4));
                var strDay = strDate.substring(8, 10);
                var strMonth = strDate.substring(5, 7);

                switch (strMonth) {
                    case "01":
                    case "03":
                    case "05":
                    case "07":
                    case "08":
                    case "10":
                    case "12":
                        nDays = 31;
                        break;
                    case "04":
                    case "06":
                    case "09":
                    case "11":
                        nDays = 30;
                        break;
                    case "02":
                        if (validateLeapYear(intYear)) {
                            nDays = 29
                        } else {
                            nDays = 28
                        }
                        ;
                        break;
                    default:
                        return false;
                }

                if (strDay > nDays || strDay == 0) {
                    return false;
                }
                return true;
            }
        }

        function validateLeapYear(year) {
            if ((year % 100 != 0) && ((year % 4 == 0) || (year % 400 == 0))) {
                return true;
            }
            else {
                return false;
            }
        }

        resetValidationForm();
        //showValidationErrorControl("id", "hay un error");
        //showValidationOKControl("titulo");
        //resetValidationControl("id");


        $("#submitForm").click(function (e) {

            resetValidationControl("titulo");
            if (validateNotempty($("#titulo").val())) {
                if (validateMaxLenght(10, $("#titulo").val())) {
                    showValidationOKControl("titulo");
                } else {
                    showValidationErrorControl("titulo", "el campo titulo no puede tener más de 10 caracteres");
                }
            } else {
                showValidationErrorControl("titulo", "el campo titulo no puede ser vacío");
            }




            e.preventDefault();

            //if (validateName() && validateEmail() && validatePass1() && validatePass2() && validateMessage())
            //    return true
            //else
            //    return false;
        });
    })
</script>
