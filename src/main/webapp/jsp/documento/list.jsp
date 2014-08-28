<%-- 
    Document   : list.jsp
    Created on : Julio de 2014
    Author     : Rafa
--%>


<%@page import="java.sql.Connection"%>
<%@page import="net.daw.dao.implementation.DocumentoDaoImpl"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Iterator"%>
<%

    ArrayList<String> alColumnsNames;
    Iterator<String> oIterador;
    String strNombreMantenimiento = "documento";
    Connection connection = (Connection) request.getAttribute("connection");
    DocumentoDaoImpl oDocumentoDao = new DocumentoDaoImpl(connection);
%>

<div class="row">

    <div class="col-md-2">
        <div class="text-right">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">Nuevo</div>
                <div class="panel-body">
                    <a class="btn btn-primary" href='jsp#/documento/new'>Crear documento</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-2">
        <div class="text-right">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">Campos visibles</div>
                <div class="panel-body">     
                    <form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="visibleFieldsForm">
                        <select id="selectVisibleFields" class="form-control" name="filter" width="80" style="width: 70px">
                        </select>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="text-right">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">Filtro</div>
                <div class="panel-body">
                    <form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm">
                        <select id="selectFilter" class="form-control" name="filter" width="80" style="width: 160px">
                        </select>
                        <select id="selectFilteroperator" class="form-control" name="filteroperator" width="80" style="width: 200px">
                            <option value="like">contiene</option>
                            <option value="notlike">no contiene</option>
                            <option value="equals">es igual a</option>
                            <option value="notequalto">es distinto de</option>
                            <option value="less">es menor que</option>
                            <option value="lessorequal">es menor o igual que</option>
                            <option value="greater">es mayor que</option>
                            <option value="greaterorequal">es mayor o igual que</option> 
                        </select>
                        <input id="inputFiltervalue" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 140px" placeholder="Valor"/>
                        <input type="submit" class="btn" id="btnFiltrar" name="btnFiltrar" value="Filtrar " />
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-5"> 
        <div class="text-right">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">Información de estado</div>
                <div class="panel-body">
                    <div class="text-left">
                        <div id="order"></div>
                        <div id="filter"></div>            
                        <div id="registers"></div>
                    </div>
                </div>
            </div>
        </div>

    </div> 
    <div class="col-md-4">     

        <div class="text-right">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">Paginación</div>
                <div class="panel-body">
                    <div class="text-center">
                        <div id="pagination"></div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <div class="col-md-3">  
        <div class="text-right">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">Registros por página</div>
                <div class="panel-body">
                    <div class="text-center">
                        <div id="nrpp"></div>
                    </div>
                </div>

            </div>
        </div> 
    </div> 


</div> 


<br>
<table class="table table-responsive table-hover table-striped table-condensed">
    <thead id="tableHeaders"></thead>
    <tbody id="tableBody"></tbody>
</table>
<div id="datos"></div>
<div id="datos2"></div>

<!-- Modales -->

<div id="modal01" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header" id="modal-header"></div>
            <div class="modal-body" id="modal-body"></div>
            <div class="modal-footer" id="modal-footer"></div>
        </div>
    </div>
</div>
<div id="modal02" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
        </div>                
    </div>
</div>
     