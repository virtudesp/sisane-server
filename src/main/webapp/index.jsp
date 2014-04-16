<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>

<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
    <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Ajax Yield</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 60px;
                padding-bottom: 40px;
            }
        </style>
        
        <link rel="stylesheet" href="css/main.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
        <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>


    </head>
    <body>
        <!--[if lt IE 7]>
        <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->

        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="jsp">ausiàsContent</a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <%if (user != null) {%>
                    <jsp:include page="jsp/menuSuperior.jsp" /> 
                    <% }%>
                    <ul class="nav navbar-nav navbar-right">
                        <jsp:include page="jsp/usuario/infologin.jsp" />
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container -->
        </nav>


        <div class="container">
            <div class="row">
                <%
                    if (user != null) {
                        out.print("<div class=\"col-md-2\">");
                %>
                <jsp:include page="jsp/menuLateral.jsp" />
                <%
                        out.print("</div>");
                    }
                %>
                <%
                    if (user != null) {
                        out.print("<div class=\"col-md-10\">");
                        out.print("<div id=\"indexContenido\"></div>");
                    } else {
                        out.print("<div class=\"col-md-12\">");
                    }
                %>
                <div id="indexContenidoJsp">
                    <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                </div>
                <%
                    out.print("</div>");
                %>    
                <div class="row">
                    <div class="col-md-12"><hr><footer><p>&copy; Rafael Aznar (2013)</p></footer></div>   
                </div>
            </div>
        </div>                    

        <!-- carga de javascript -->

        <script src="js/vendor/bootstrap.min.js"></script>



        <script src="./js/vendor/path.min.js"></script> 
        <script src="./js/vendor/jquery.validate.min.js"></script>
        <script src="./js/vendor/creole-parser.js"></script>

        <script src="js/util.js" charset="UTF-8"></script>
        <script src="js/main.js" charset="UTF-8"></script>

        <script src="js/control/alumno.js" charset="UTF-8"></script>
        <script src="js/control/usuario.js" charset="UTF-8"></script>
        <script src="js/control/lenguaje.js" charset="UTF-8"></script>
        <script src="js/control/documento.js" charset="UTF-8"></script>
        <script src="js/control/entrada.js" charset="UTF-8"></script>
        <script src="js/control/actividad.js" charset="UTF-8"></script>
        <script src="js/control/empresa.js" charset="UTF-8"></script>
        <script src="js/control/entrada.js" charset="UTF-8"></script>
        <script src="js/control/hilo.js" charset="UTF-8"></script>
        <script src="js/control/tipodocumento.js" charset="UTF-8"></script>
        <script src="js/control/votodocumento.js" charset="UTF-8"></script>
        <script src="js/control/estado.js" charset="UTF-8"></script>
        <script src="js/control/comentario.js" charset="UTF-8"></script>
        <script src="js/control/actividadoffline.js" charset="UTF-8"></script>
        <script src="js/control/entrega.js" charset="UTF-8"></script>    
        <script src="js/control/metadocumento.js" charset="UTF-8"></script>
        <script src="js/control/repositorio.js" charset="UTF-8"></script>
        <script src="js/control/opcion.js" charset="UTF-8"></script>    
        <script src="js/control/cuestionario.js" charset="UTF-8"></script>
        <script src="js/control/pregunta.js" charset="UTF-8"></script>
        <script src="js/control/follower.js" charset="UTF-8"></script>
        <script src="js/control/incidencias.js" charset="UTF-8"></script>
        <script src="js/control/requerimiento.js" charset="UTF-8"></script>
        <script src="js/control/profesor.js" charset="UTF-8"></script>
        <script src="js/control/backlog.js" charset="UTF-8"></script>

        <script>

            $(document).ready(function() {
                inicializacion();

                Path.map("#/actividad").to(function() {
                    var actividad = objeto('actividad', '<%=request.getContextPath()%>');
                    var actividadView = vista(actividad, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(actividadView.getEmptyList());

                    var actividadControl = control_actividad_list('<%=request.getContextPath()%>');
                    actividadControl.inicia(actividadView, 1, null, null, 10, null, null, null, null);
                    return false;
                });


                Path.map("#/actividad/view/:id").to(function() {
                    var actividad = objeto('actividad', '<%=request.getContextPath()%>');
                    var actividadView = vista(actividad, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(actividadView.getEmptyList());

                    var actividadControl = control_actividad_list('<%=request.getContextPath()%>');
                    actividadControl.viewRegister(actividadView, this.params['id']);
                    return false;
                });

                Path.map("#/actividad/edit/:id").to(function() {
                    var actividad = objeto('actividad', '<%=request.getContextPath()%>');
                    var actividadView = vista(actividad, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(actividadView.getEmptyList());

                    var actividadControl = control_actividad_list('<%=request.getContextPath()%>');
                    actividadControl.editRegister(actividadView, this.params['id']);
                    return false;
                });

                Path.map("#/documento").to(function() {
                    var documento = objeto('documento', '<%=request.getContextPath()%>');
                    var documentoView = vista(documento, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(documentoView.getEmptyList());

                    var documentoControl = control_documento_list('<%=request.getContextPath()%>');
                    documentoControl.inicia(documentoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                Path.map("#/empresa").to(function() {
                    var empresa = objeto('empresa', '<%=request.getContextPath()%>');
                    var empresaView = vista(empresa, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(empresaView.getEmptyList());

                    var empresaControl = control_empresa_list('<%=request.getContextPath()%>');
                    empresaControl.inicia(empresaView, 1, null, null, 10, null, null, null, null);
                    return false;
                });


                Path.map("#/alumno").to(function() {
                    var alumno = objeto('alumno', '<%=request.getContextPath()%>');
                    var alumnoView = vista(alumno, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(alumnoView.getEmptyList());

                    var alumnoControl = control_alumno_list('<%=request.getContextPath()%>');
                    alumnoControl.inicia(alumnoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });


                Path.map("#/profesor").to(function() {
                    var profesor = objeto('profesor', '<%=request.getContextPath()%>');
                    var profesorView = vista(profesor, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(profesorView.getEmptyList());

                    var profesorControl = control_profesor_list('<%=request.getContextPath()%>');
                    profesorControl.inicia(profesorView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                Path.map("#/usuario").to(function() {
                    var usuario = objeto('usuario', '<%=request.getContextPath()%>');
                    var usuarioView = vista(usuario, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(usuarioView.getEmptyList());

                    var usuarioControl = control_usuario_list('<%=request.getContextPath()%>');
                    usuarioControl.inicia(usuarioView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                Path.listen();
                /* 
                 $('#lnkActividad').unbind('click');
                 $('#lnkActividad').click(function() {
                 var actividad = objeto('actividad', '<%=request.getContextPath()%>');
                 var actividadView = vista(actividad, '<%=request.getContextPath()%>');
                 name
                 $('#indexContenidoJsp').empty();
                 $('#indexContenido').empty().append(actividadView.getEmptyList());
                 
                 var actividadControl = control_actividad_list('<%=request.getContextPath()%>');
                 actividadControl.inicia(actividadView, 1, null, null, 10, null, null, null, null);
                 return false;
                 });
                 */

                $('#lnkLenguaje').unbind('click');
                $('#lnkLenguaje').click(function() {
                    var lenguaje = objeto('lenguaje', '<%=request.getContextPath()%>');
                    var lenguajeView = vista(lenguaje, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(lenguajeView.getEmptyList());

                    var lenguajeControl = control_lenguaje_list('<%=request.getContextPath()%>');
                    lenguajeControl.inicia(lenguajeView, 1, null, null, 10, null, null, null, null);
                    return false;
                });


                $('#lnkEntrada').unbind('click');
                $('#lnkEntrada').click(function() {
                    var entrada = objeto('entrada', '<%=request.getContextPath()%>');
                    var entradaView = vista(entrada, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(entradaView.getEmptyList());

                    var entradaControl = control_entrada_list('<%=request.getContextPath()%>');
                    entradaControl.inicia(entradaView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkEstado').unbind('click');
                $('#lnkEstado').click(function() {
                    var estado = objeto('estado', '<%=request.getContextPath()%>');
                    var estadoView = vista(estado, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(estadoView.getEmptyList());

                    var estadoControl = control_estado_list('<%=request.getContextPath()%>');
                    estadoControl.inicia(estadoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });




                $('#lnkHilo').unbind('click');
                $('#lnkHilo').click(function() {
                    var hilo = objeto('hilo', '<%=request.getContextPath()%>');
                    var hiloView = vista(hilo, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(hiloView.getEmptyList());

                    var hiloControl = control_hilo_list('<%=request.getContextPath()%>');
                    hiloControl.inicia(hiloView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                $('#lnkTipodocumento').unbind('click');
                $('#lnkTipodocumento').click(function() {
                    var tipodocumento = objeto('tipodocumento', '<%=request.getContextPath()%>');
                    var tipodocumentoView = vista(tipodocumento, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(tipodocumentoView.getEmptyList());

                    var tipodocumentoControl = control_tipodocumento_list('<%=request.getContextPath()%>');
                    tipodocumentoControl.inicia(tipodocumentoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });



                $('#lnkVotodocumento').unbind('click');
                $('#lnkVotodocumento').click(function() {
                    var votodocumento = objeto('votodocumento', '<%=request.getContextPath()%>');
                    var votodocumentoView = vista(votodocumento, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(votodocumentoView.getEmptyList());

                    var votodocumentoControl = control_votodocumento_list('<%=request.getContextPath()%>');
                    votodocumentoControl.inicia(votodocumentoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });



                $('#lnkVotodocumento').unbind('click');
                $('#lnkVotodocumento').click(function() {
                    var votodocumento = objeto('votodocumento', '<%=request.getContextPath()%>');
                    var votodocumentoView = vista(votodocumento, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(votodocumentoView.getEmptyList());

                    var votodocumentoControl = control_votodocumento_list('<%=request.getContextPath()%>');
                    votodocumentoControl.inicia(votodocumentoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkActividadoffline').unbind('click');
                $('#lnkActividadoffline').click(function() {
                    var actividadoffline = objeto('actividadoffline', '<%=request.getContextPath()%>');
                    var actividadofflineView = vista(actividadoffline, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(actividadofflineView.getEmptyList());

                    var actividadofflineControl = control_actividadoffline_list('<%=request.getContextPath()%>');
                    actividadofflineControl.inicia(actividadofflineView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkEntrega').unbind('click');
                $('#lnkEntrega').click(function() {
                    var entrega = objeto('entrega', '<%=request.getContextPath()%>');
                    var entregaView = vista(entrega, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(entregaView.getEmptyList());

                    var entregaControl = control_entrega_list('<%=request.getContextPath()%>');
                    entregaControl.inicia(entregaView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkMetadocumento').unbind('click');
                $('#lnkMetadocumento').click(function() {
                    var metadocumento = objeto('metadocumento', '<%=request.getContextPath()%>');
                    var metadocumentoView = vista(metadocumento, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(metadocumentoView.getEmptyList());

                    var metadocumentoControl = control_metadocumento_list('<%=request.getContextPath()%>');
                    metadocumentoControl.inicia(metadocumentoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkRepositorio').unbind('click');
                $('#lnkRepositorio').click(function() {
                    var repositorio = objeto('repositorio', '<%=request.getContextPath()%>');
                    var repositorioView = vista(repositorio, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(repositorioView.getEmptyList());

                    var repositorioControl = control_repositorio_list('<%=request.getContextPath()%>');
                    repositorioControl.inicia(repositorioView, 1, null, null, 10, null, null, null, null);
                    return false;
                });


                $('#lnkComentario').unbind('click');
                $('#lnkComentario').click(function() {
                    var comentario = objeto('comentario', '<%=request.getContextPath()%>');
                    var comentarioView = vista(comentario, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(comentarioView.getEmptyList());

                    var comentarioControl = control_comentario_list('<%=request.getContextPath()%>');
                    comentarioControl.inicia(comentarioView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                $('#lnkCuestionario').unbind('click');
                $('#lnkCuestionario').click(function() {
                    var cuestionario = objeto('cuestionario', '<%=request.getContextPath()%>');
                    var cuestionarioView = vista(cuestionario, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(cuestionarioView.getEmptyList());

                    var cuestionarioControl = control_cuestionario_list('<%=request.getContextPath()%>');
                    cuestionarioControl.inicia(cuestionarioView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                $('#lnkOpcion').unbind('click');
                $('#lnkOpcion').click(function() {
                    var opcion = objeto('opcion', '<%=request.getContextPath()%>');
                    var opcionView = vista(opcion, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(opcionView.getEmptyList());

                    var opcionControl = control_opcion_list('<%=request.getContextPath()%>');
                    opcionControl.inicia(opcionView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                $('#lnkPregunta').unbind('click');
                $('#lnkPregunta').click(function() {
                    var pregunta = objeto('pregunta', '<%=request.getContextPath()%>');
                    var preguntaView = vista(pregunta, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(preguntaView.getEmptyList());

                    var preguntaControl = control_pregunta_list('<%=request.getContextPath()%>');
                    preguntaControl.inicia(preguntaView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkFollower').unbind('click');
                $('#lnkFollower').click(function() {
                    var follower = objeto('follower', '<%=request.getContextPath()%>');
                    var followerView = vista(follower, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(followerView.getEmptyList());

                    var followerControl = control_follower_list('<%=request.getContextPath()%>');
                    followerControl.inicia(followerView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                $('#lnkIncidencias').unbind('click');
                $('#lnkIncidencias').click(function() {
                    var incidencias = objeto('incidencias', '<%=request.getContextPath()%>');
                    var incidenciasView = vista(incidencias, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(incidenciasView.getEmptyList());

                    var incidenciasControl = control_incidencias_list('<%=request.getContextPath()%>');
                    incidenciasControl.inicia(incidenciasView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                $('#lnkRequerimiento').unbind('click');
                $('#lnkRequerimiento').click(function() {
                    var requerimiento = objeto('requerimiento', '<%=request.getContextPath()%>');
                    var requerimientoView = vista(requerimiento, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(requerimientoView.getEmptyList());

                    var requerimientoControl = control_requerimiento_list('<%=request.getContextPath()%>');
                    requerimientoControl.inicia(requerimientoView, 1, null, null, 10, null, null, null, null);
                    return false;
                });
                $('#lnkBacklog').unbind('click');
                $('#lnkBacklog').click(function() {
                    var backlog = objeto('backlog', '<%=request.getContextPath()%>');
                    var backlogView = vista(backlog, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(backlogView.getEmptyList());

                    var backlogControl = control_backlog_list('<%=request.getContextPath()%>');
                    backlogControl.inicia(backlogView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkProfesor').unbind('click');
                $('#lnkProfesor').click(function() {
                    var profesor = objeto('profesor', '<%=request.getContextPath()%>');
                    var profesorView = vista(profesor, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(profesorView.getEmptyList());

                    var profesorControl = control_profesor_list('<%=request.getContextPath()%>');
                    profesorControl.inicia(profesorView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

                $('#lnkProfesor').unbind('click');
                $('#lnkProfesor').click(function() {
                    var profesor = objeto('profesor', '<%=request.getContextPath()%>');
                    var profesorView = vista(profesor, '<%=request.getContextPath()%>');

                    $('#indexContenidoJsp').empty();
                    $('#indexContenido').empty().append(profesorView.getEmptyList());

                    var profesorControl = control_profesor_list('<%=request.getContextPath()%>');
                    profesorControl.inicia(profesorView, 1, null, null, 10, null, null, null, null);
                    return false;
                });

            });

        </script>
    </body>
</html>

