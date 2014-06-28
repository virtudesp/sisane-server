<%-- 
    Document   : filterform
    Created on : Jun 28, 2014, 5:41:58 PM
    Author     : rafa
--%>
<%@page import="net.daw.helper.Conexion"%>
<%@page import="net.daw.dao.DocumentoDao"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Iterator"%>
<%
    DocumentoDao oDocumentoDao_Mysql = new DocumentoDao();
    ArrayList<String> alColumnsNames = (ArrayList<String>) oDocumentoDao_Mysql.getColumnsNames();
    Iterator<String> oIterador = alColumnsNames.listIterator();
    String strNombreMantenimiento = "documento";
%>
<legend>Filtro</legend> 
<form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm">
    <select id="selectFilter" class="form-control" name="filter" width="80" style="width: 100px">
        <%
            while (oIterador.hasNext()) {
                String strNombreColumna = oIterador.next();
                String strNombreColumnaPretty = strNombreColumna.charAt(0) + strNombreColumna.substring(1);
        %>
        <option value="<%=strNombreColumna%>"><%=strNombreColumnaPretty%></option>
        <% }%>
    </select>
    <select id="selectFilteroperator" class="form-control" name="filteroperator" width="80" style="width: 100px">
        <option>like</option>
        <option>notlike</option>
        <option>equals</option>
        <option>notequalto</option>
        <option>less</option>
        <option>lessorequal</option>
        <option>greater</option>
        <option>greaterorequal</option> 
    </select>
    <input id="inputFiltervalue" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 90px" placeholder="Valor"/>
    <input type="submit" class="btn" id="btnFiltrar" name="btnFiltrar" value="Filtrar " />
</form>
