<%-- 
    Document   : listBueno
    Created on : 01-dic-2014, 17:15:48
    Author     : al037542
--%>

<%@page import="java.sql.Connection"%>
<%@page import="net.daw.dao.generic.specific.implementation.DocumentobonitoDaoGenSpImpl"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Iterator"%>
<%
    ArrayList<String> alColumnsNames;
    Iterator<String> oIterador;
    String strNombreMantenimiento = "documentobonito";
    Connection connection = (Connection) request.getAttribute("connection");
%>
<div class="row">
    <div class="col-md-12">
        <div class="tabbable">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#pane1" data-toggle="tab">Paginación</a></li>                
                <li><a href="#pane2" data-toggle="tab">Filtro</a></li>
                <li><a href="#pane3" data-toggle="tab">Nuevo</a></li>
            </ul>
            <div class="tab-content">
                <br />

                <div class="row">
                    <div class="col-md-4">
                        <div id="registers"></div>
                    </div>
                    <div class="col-md-4">
                        <div id="order"></div> 
                    </div>
                    <div class="col-md-4">
                        <div id="filter"></div>   
                    </div>
                </div>

                <div id="pane1" class="tab-pane active">
                    <div class="row">
                        <div class="col-md-5">
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
                        <div class="col-md-2">
                            <div class="panel panel-default">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Visualizacion</div>
                                <div class="panel-body visualizacion">     
                                  <a class="btn btn-default botLista" href="jsp#/documento"><i class="glyphicon glyphicon-th-list"></i></a>
                                  <a class="btn btn-default active botFile" href="#"><i class="glyphicon glyphicon-file"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
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
                        <div class="col-md-3">
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


                <div id="pane2" class="tab-pane">                    
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Filtro</div>
                                <div class="panel-body">
                                    <form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm">
                                        <select id="selectFilter" class="form-control" name="filter" style="width: 160px">
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
                <div id="pane3" class="tab-pane">                    
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">                                 
                                <div class="panel-heading">Nuevo</div>
                                <div class="panel-body">
                                    <br />
                                    <div class="text-center">
                                        <a id="newButton" class="btn btn-primary" href='jsp#/<%=strNombreMantenimiento%>/new'>Crear un nuevo <%=strNombreMantenimiento%></a> 
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>

<div class="row ejercicio">
    <div class="col-md-12" id="menuLateralList"> 
        <div id="tableBody"></div>
        <div id="datos"></div>
        <div id="datos2"></div>
    </div> 
</div> 




<!-- Modals -->
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