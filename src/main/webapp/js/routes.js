

function do_routes() {
    /* pedir un canvas
     * izquierda: infos
     * nuevo
     * filtro
     * nrpp
     * ncpp
     * centro: titulo
     * botonera
     */



    Path.map("#/documento").to(function() {
        $('#indexContenidoJsp').empty();
        control_documento().list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        return false;
    });

    Path.map("#/documento/list/:url").to(function() {
        $('#indexContenidoJsp').empty();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        control_documento().list($('#indexContenido'), paramsObject, null);
        return false;
    });

    Path.map("#/documento/view/:id").to(function() {
        $('#indexContenidoJsp').empty();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        control_documento().view($('#indexContenido'), paramsObject['id']);
        return false;
    });

    Path.map("#/documento/edit/:id").to(function() {

        $('#indexContenidoJsp').empty();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        control_documento().edit($('#indexContenido'), paramsObject['id']);
    });

    Path.map("#/documento/new").to(function() {

        $('#indexContenidoJsp').empty();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        control_documento().new($('#indexContenido'));
        return false;
    });

    Path.map("#/documento/remove/:id").to(function() {

        $('#indexContenidoJsp').empty();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        control_documento().remove($('#indexContenido'), paramsObject['id']);
        return false;
    });









    Path.map("#/actividad").to(function() {

        var actividad = objeto('actividad', path);
        var actividadView = vista(actividad, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(actividadView.getEmptyList());

        var actividadControl = control_actividad_list(path);
        actividadControl.inicia(actividadView, 1, null, null, 10, null, null, null, null);
        return false;
    });


    Path.map("#/actividad/view/:id").to(function() {
        var actividad = objeto('actividad', path);
        var actividadView = vista(actividad, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(actividadView.getEmptyList());

        var actividadControl = control_actividad_list(path);
        actividadControl.viewRegister(actividadView, this.params['id']);
        return false;
    });

    Path.map("#/actividad/edit/:id").to(function() {
        var actividad = objeto('actividad', path);
        var actividadView = vista(actividad, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(actividadView.getEmptyList());

        var actividadControl = control_actividad_list(path);
        actividadControl.editRegister(actividadView, this.params['id']);
        return false;
    });






    /*
     function showContent() {
     var documento = objeto('documento', path);
     var content = decodeURIComponent(documento.getOne(1)['contenido']);
     
     creoleParse(content, $('#contenidoParseado'));
     
     return false;
     }
     ;
     */

    //showContent();

    Path.map("#/empresa").to(function() {
        var empresa = objeto('empresa', path);
        var empresaView = vista(empresa, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(empresaView.getEmptyList());

        var empresaControl = control_empresa_list(path);
        empresaControl.inicia(empresaView, 1, null, null, 10, null, null, null, null);
        return false;
    });


    Path.map("#/alumno").to(function() {
        var alumno = objeto('alumno', path);
        var alumnoView = vista(alumno, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(alumnoView.getEmptyList());

        var alumnoControl = control_alumno_list(path);
        alumnoControl.inicia(alumnoView, 1, null, null, 10, null, null, null, null);
        return false;
    });


    Path.map("#/profesor").to(function() {
        var profesor = objeto('profesor', path);
        var profesorView = vista(profesor, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(profesorView.getEmptyList());

        var profesorControl = control_profesor_list(path);
        profesorControl.inicia(profesorView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    Path.map("#/usuario").to(function() {
        var usuario = objeto('usuario', path);
        var usuarioView = vista(usuario, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(usuarioView.getEmptyList());

        var usuarioControl = control_usuario_list(path);
        usuarioControl.inicia(usuarioView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    Path.listen();
    /* 
     $('#lnkActividad').unbind('click');
     $('#lnkActividad').click(function() {
     var actividad = objeto('actividad', path);
     var actividadView = vista(actividad, path);
     name
     $('#indexContenidoJsp').empty();
     $('#indexContenido').empty().append(actividadView.getEmptyList());
     
     var actividadControl = control_actividad_list(path);
     actividadControl.inicia(actividadView, 1, null, null, 10, null, null, null, null);
     return false;
     });
     */

    $('#lnkLenguaje').unbind('click');
    $('#lnkLenguaje').click(function() {
        var lenguaje = objeto('lenguaje', path);
        var lenguajeView = vista(lenguaje, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(lenguajeView.getEmptyList());

        var lenguajeControl = control_lenguaje_list(path);
        lenguajeControl.inicia(lenguajeView, 1, null, null, 10, null, null, null, null);
        return false;
    });


    $('#lnkEntrada').unbind('click');
    $('#lnkEntrada').click(function() {
        var entrada = objeto('entrada', path);
        var entradaView = vista(entrada, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(entradaView.getEmptyList());

        var entradaControl = control_entrada_list(path);
        entradaControl.inicia(entradaView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkEstado').unbind('click');
    $('#lnkEstado').click(function() {
        var estado = objeto('estado', path);
        var estadoView = vista(estado, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(estadoView.getEmptyList());

        var estadoControl = control_estado_list(path);
        estadoControl.inicia(estadoView, 1, null, null, 10, null, null, null, null);
        return false;
    });




    $('#lnkHilo').unbind('click');
    $('#lnkHilo').click(function() {
        var hilo = objeto('hilo', path);
        var hiloView = vista(hilo, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(hiloView.getEmptyList());

        var hiloControl = control_hilo_list(path);
        hiloControl.inicia(hiloView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    $('#lnkTipodocumento').unbind('click');
    $('#lnkTipodocumento').click(function() {
        var tipodocumento = objeto('tipodocumento', path);
        var tipodocumentoView = vista(tipodocumento, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(tipodocumentoView.getEmptyList());

        var tipodocumentoControl = control_tipodocumento_list(path);
        tipodocumentoControl.inicia(tipodocumentoView, 1, null, null, 10, null, null, null, null);
        return false;
    });



    $('#lnkVotodocumento').unbind('click');
    $('#lnkVotodocumento').click(function() {
        var votodocumento = objeto('votodocumento', path);
        var votodocumentoView = vista(votodocumento, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(votodocumentoView.getEmptyList());

        var votodocumentoControl = control_votodocumento_list(path);
        votodocumentoControl.inicia(votodocumentoView, 1, null, null, 10, null, null, null, null);
        return false;
    });



    $('#lnkVotodocumento').unbind('click');
    $('#lnkVotodocumento').click(function() {
        var votodocumento = objeto('votodocumento', path);
        var votodocumentoView = vista(votodocumento, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(votodocumentoView.getEmptyList());

        var votodocumentoControl = control_votodocumento_list(path);
        votodocumentoControl.inicia(votodocumentoView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkActividadoffline').unbind('click');
    $('#lnkActividadoffline').click(function() {
        var actividadoffline = objeto('actividadoffline', path);
        var actividadofflineView = vista(actividadoffline, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(actividadofflineView.getEmptyList());

        var actividadofflineControl = control_actividadoffline_list(path);
        actividadofflineControl.inicia(actividadofflineView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkEntrega').unbind('click');
    $('#lnkEntrega').click(function() {
        var entrega = objeto('entrega', path);
        var entregaView = vista(entrega, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(entregaView.getEmptyList());

        var entregaControl = control_entrega_list(path);
        entregaControl.inicia(entregaView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkMetadocumento').unbind('click');
    $('#lnkMetadocumento').click(function() {
        var metadocumento = objeto('metadocumento', path);
        var metadocumentoView = vista(metadocumento, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(metadocumentoView.getEmptyList());

        var metadocumentoControl = control_metadocumento_list(path);
        metadocumentoControl.inicia(metadocumentoView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkRepositorio').unbind('click');
    $('#lnkRepositorio').click(function() {
        var repositorio = objeto('repositorio', path);
        var repositorioView = vista(repositorio, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(repositorioView.getEmptyList());

        var repositorioControl = control_repositorio_list(path);
        repositorioControl.inicia(repositorioView, 1, null, null, 10, null, null, null, null);
        return false;
    });


    $('#lnkComentario').unbind('click');
    $('#lnkComentario').click(function() {
        var comentario = objeto('comentario', path);
        var comentarioView = vista(comentario, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(comentarioView.getEmptyList());

        var comentarioControl = control_comentario_list(path);
        comentarioControl.inicia(comentarioView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    $('#lnkCuestionario').unbind('click');
    $('#lnkCuestionario').click(function() {
        var cuestionario = objeto('cuestionario', path);
        var cuestionarioView = vista(cuestionario, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(cuestionarioView.getEmptyList());

        var cuestionarioControl = control_cuestionario_list(path);
        cuestionarioControl.inicia(cuestionarioView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    $('#lnkOpcion').unbind('click');
    $('#lnkOpcion').click(function() {
        var opcion = objeto('opcion', path);
        var opcionView = vista(opcion, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(opcionView.getEmptyList());

        var opcionControl = control_opcion_list(path);
        opcionControl.inicia(opcionView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    $('#lnkPregunta').unbind('click');
    $('#lnkPregunta').click(function() {
        var pregunta = objeto('pregunta', path);
        var preguntaView = vista(pregunta, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(preguntaView.getEmptyList());

        var preguntaControl = control_pregunta_list(path);
        preguntaControl.inicia(preguntaView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkFollower').unbind('click');
    $('#lnkFollower').click(function() {
        var follower = objeto('follower', path);
        var followerView = vista(follower, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(followerView.getEmptyList());

        var followerControl = control_follower_list(path);
        followerControl.inicia(followerView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    $('#lnkIncidencias').unbind('click');
    $('#lnkIncidencias').click(function() {
        var incidencias = objeto('incidencias', path);
        var incidenciasView = vista(incidencias, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(incidenciasView.getEmptyList());

        var incidenciasControl = control_incidencias_list(path);
        incidenciasControl.inicia(incidenciasView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    $('#lnkRequerimiento').unbind('click');
    $('#lnkRequerimiento').click(function() {
        var requerimiento = objeto('requerimiento', path);
        var requerimientoView = vista(requerimiento, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(requerimientoView.getEmptyList());

        var requerimientoControl = control_requerimiento_list(path);
        requerimientoControl.inicia(requerimientoView, 1, null, null, 10, null, null, null, null);
        return false;
    });
    $('#lnkBacklog').unbind('click');
    $('#lnkBacklog').click(function() {
        var backlog = objeto('backlog', path);
        var backlogView = vista(backlog, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(backlogView.getEmptyList());

        var backlogControl = control_backlog_list(path);
        backlogControl.inicia(backlogView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkProfesor').unbind('click');
    $('#lnkProfesor').click(function() {
        var profesor = objeto('profesor', path);
        var profesorView = vista(profesor, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(profesorView.getEmptyList());

        var profesorControl = control_profesor_list(path);
        profesorControl.inicia(profesorView, 1, null, null, 10, null, null, null, null);
        return false;
    });

    $('#lnkProfesor').unbind('click');
    $('#lnkProfesor').click(function() {
        var profesor = objeto('profesor', path);
        var profesorView = vista(profesor, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(profesorView.getEmptyList());

        var profesorControl = control_profesor_list(path);
        profesorControl.inicia(profesorView, 1, null, null, 10, null, null, null, null);
        return false;
    });

}
;
