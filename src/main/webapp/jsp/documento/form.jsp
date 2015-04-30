

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
    <hr class="colorgraph">
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
                controlWidth = getInputTypeTextLenght(methodAnnotation.MaxLength());
            }
            String strHtml = ("<div id=\"" + field.getName() + "-group\" class=\"form-group  has-success has-feedback\">"
                    + "<label class=\"col-sm-2 control-label\"  for=\"" + field.getName() + "\">" + methodAnnotation.ShortName() + ":</label>"
                    + "<div class=\"control col-sm-" + controlWidth.toString() + "\">    "
                    + "<input type=\"text\" id=\"" + field.getName() + "\" class=\"form-control\"  name=\"" + field.getName() + "\" size=\"15\" placeholder=\"" + field.getName() + "\" />"
                    + "</div>"
                    + "</div>");

            strHtml += "<script type=\"text/javascript\">jQuery(function ($) {"
                    + "$(\"#" + field.getName() + "\").bind('keyup',function(event) {"
                    + "if ( validateMaxLength(" + methodAnnotation.MaxLength() + ", $(\"#" + field.getName() + "\").val())){"
                    + "if ( validateMinLength(" + methodAnnotation.MinLength() + ", $(\"#" + field.getName() + "\").val())){"
                    + "resetValidationControl('" + field.getName() + "');"
                    + "showValidationOKControl('" + field.getName() + "');"
                    //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-error\").addClass(\"has-success\")"
                    + "} else {"
                    + "resetValidationControl('" + field.getName() + "');"
                    + "showValidationErrorControl('" + field.getName() + "','Debes introducir más caracteres');"
                    + "showValidationOKControl('" + field.getName() + "');"
                    //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
                    + "}"
                    + "} else {"
                    + "resetValidationControl('" + field.getName() + "');"
                    + "showValidationErrorControl('" + field.getName() + "','Excedido el máximo de caracteres');"
                    + "showValidationOKControl('" + field.getName() + "');"
                    //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
                    + "}"
                    + "});"
                    + "});"
                    + "</script>";
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
                    + "<div class=\"control col-sm-" + controlWidth.toString() + "\">"
                    + "<div class=\"input-group date\" id=\"" + field.getName() + "_group\">"
                    + "<span class=\"input-group-addon\">"
                    + "<span class=\"glyphicon glyphicon-calendar\"></span>"
                    + "</span>"
                    + "<input type=\"text\" class=\"form-control\" id=\"" + field.getName() + "\" name=\"" + field.getName() + "_group\" placeholder=\"" + methodAnnotation.UltraShortName() + "\" />"
                    + "</div>"
                    + "</div>"
                    + "</div>\n");
            strHtml += "<script type=\"text/javascript\">"
                    + "jQuery(function ($) {"
                    + "$('#" + field.getName() + "').datetimepicker({"
                    + "pickTime: false,"
                    + "language: 'es',"
                    + "showToday: true"
                    + "});"
                    + "});"
                    + "</script>";
            strHtml += "<script type=\"text/javascript\">jQuery(function ($) {"
                    + "$(\"#" + field.getName() + "\").bind('keyup',function(event) {"
                    + "if (validateSpanishDate($(\"#" + field.getName() + "\").val())){"
                    + "resetValidationControl('" + field.getName() + "');"
                    + "showValidationOKControl('" + field.getName() + "');"
                    //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-error\").addClass(\"has-success\")"
                    + "} else {"
                    + "resetValidationControl('" + field.getName() + "');"
                    + "showValidationErrorControl('" + field.getName() + "','Error al validar la fecha');"
                    + "showValidationOKControl('" + field.getName() + "');"
                    //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
                    + "}"
                    + "});"
                    + "});"
                    + "</script>";
            strHtml += "<script type=\"text/javascript\">jQuery(function ($) {"
                    + "$(\"#" + field.getName() + "\").bind('change',function(event) {"
                    + "if (validateSpanishDate($(\"#" + field.getName() + "\").val())){"
                    + "resetValidationControl('" + field.getName() + "');"
                    //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-error\").addClass(\"has-success\")"
                    + "} else {"
                    + "resetValidationControl('" + field.getName() + "');"
                    + "showValidationErrorControl('" + field.getName() + "','Error al validar la fecha');"
                    //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
                    + "}"
                    + "});"
                    + "});"
                    + "</script>";

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
                    + "<label class=\"col-sm-2 control-label\" for=\"obj_" + field.getName().substring(3) + "_id\">" + methodAnnotation.ShortName() + "</label>"
                    + "<div class=\"col-sm-2\">"
                    + "<input readonly=\"true\"  class=\"form-control\"  id=\"obj_" + field.getName().substring(3) + "_id\" class=\"input-mini\" name=\"id_" + field.getName() + "\" type=\"text\" size=\"5\" maxlength=\"5\" />"
                    + "</div>"
                    + "<div class=\"col-sm-1\">"
                    + "<a class=\"btn btn-primary btn-sm\" id=\"obj_" + field.getName().substring(3) + "_button\" href=\"#\"><i class=\"glyphicon glyphicon-search\"></i></a>"
                    + "</div>"
                    + "<label class=\"col-sm-7\" for=\"obj_" + field.getName() + "_desc\" id=\"obj_" + field.getName().substring(3) + "_desc\"></label>"
                    + "</div>");
            return strHtml;

        }


    %>
    <%

        BeanGenImpl oGenericBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation.DocumentoBean").newInstance();
        Class tipo = oGenericBean.getClass();

        //out.print("******" + tipo.getName() + "******<br />");
        Annotation[] classAnnotations = tipo.getDeclaredAnnotations();
        for (int i = 0; i < classAnnotations.length; i++) {
            TableSourceMetaInformation tableAnnotation = (TableSourceMetaInformation) classAnnotations[i];
            //out.print("<h3>Formulario de " + tableAnnotation.Description() + "</h3>");
            //out.print("----Description (" + tableAnnotation.Description() + ")<br />");
            //out.print("----Table name (" + tableAnnotation.TableName() + ")<br />");
            //out.print("<br />");
            out.print("<br />");
        }

        for (Field field : tipo.getDeclaredFields()) {
            Class type = field.getType();
            String name = field.getName();
            //out.print("* " + field.getName() + "(" + field.getType() + ")<br />");
            Annotation[] methodAnnotations = field.getDeclaredAnnotations();
            //out.print(field.getName() + " (" + String.valueOf(methodAnnotations.length) + ")<br />");

            for (Integer i = 0; i < methodAnnotations.length; i++) {
                //    MethodMetaInformation methodAnnotation = (MethodMetaInformation) methodAnnotations[i];
                if (methodAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                    //out.print(" " + i.toString() + " (" + methodAnnotations[i].annotationType().toString() + ")<br />");
                    MethodMetaInformation methodAnnotation = (MethodMetaInformation) methodAnnotations[i];

                    //out.print("    " + i.toString() + " (" + methodAnnotation.ShortName() + ")<br />");
                    //out.print("    " + i.toString() + " (" + methodAnnotation.Type().toString() + ")<br />");
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

        $.fn.resetValidationForm = function () {
            //pendiente

        }
        //limpieza









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
