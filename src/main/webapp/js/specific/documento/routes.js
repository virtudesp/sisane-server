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


function fDocumentoRoutes() {
    var dataFromServer = $.Deferred();
    var icon = '<i class="fa fa-file-text-o fa-5x"></i>';
    var fillDocumentoPageHeader = _.partial(html.getPageHeader, icon, 'Documento', _);
    var strClass = 'documento';

    Path.map("#/documento/new").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        ausiasFLOW.reset();
        ausiasFLOW.newModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.newModule_frontOperation = 'new';
        ausiasFLOW.newModule_class = 'documento';
        ausiasFLOW.initialize(component_new().new, $('#broth_content'));
        return false;
    });
    Path.map("#/documento/new/:url").to(function () {
        //$('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Nuevo'));
//        var paramsObject;
//        if (this.url) {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        ausiasFLOW.reset();
        ausiasFLOW.newModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.newModule_frontOperation = 'new';
        ausiasFLOW.newModule_class = 'documento';
//        } else {
//            paramsObject = parameter.defaultizeUrlObjectParameters({});
//        }
        ausiasFLOW.initialize(component_new().new, $('#broth_content'));

        return false;
    });
    Path.map("#/documento/edit/:url").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Edit'));
        ausiasFLOW.reset();
        ausiasFLOW.editModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.editModule_frontOperation = 'new';
        ausiasFLOW.editModule_class = 'documento';

        ausiasFLOW.initialize(component_edit().edit, $('#broth_content'));

        //editOperation(this.params['url']);
        return false;
    });

    Path.map("#/documento/view/:id").to(function () {
        //viewOperation(this.params['url']);
        //ausiasFLOW.initialize(component_view().view, $('#broth_content'), this.params['url'], 'documento');
        //var ausiasFLOW.idview=11;
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('View'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.viewModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']); // paramsObject['id'];
        ausiasFLOW.viewModule_frontOperation = 'view';
        ausiasFLOW.viewModule_class = 'documento';
        ausiasFLOW.initialize(component_view().view, $('#broth_content'));
        return false;
    });
    Path.map("#/documento/plist").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.pListModule_paramsObject = {};
        ausiasFLOW.pListModule_frontOperation = 'plist';
        ausiasFLOW.pListModule_class = 'documento';
        ausiasFLOW.initialize(component_plist().list, $('#broth_content'));
        return false;
    });    
    Path.map("#/documento/plist/:url").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.pListModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.pListModule_frontOperation = 'plist';
        ausiasFLOW.pListModule_class = 'documento';
        ausiasFLOW.initialize(component_plist().list, $('#broth_content'));
        return false;
    });
    
    
    
    
    
    Path.map("#/documento_labels_authors_x_ndocs_/plist").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.pListModule_paramsObject = {};
        ausiasFLOW.pListModule_frontOperation = 'plist';
        ausiasFLOW.pListModule_class = 'documento_labels_authors_x_ndocs_';
        ausiasFLOW.initialize(component_plist().list, $('#broth_content'));
        return false;
    });    
    Path.map("#/documento_labels_authors_x_ndocs_/plist/:url").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.pListModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.pListModule_frontOperation = 'plist';
        ausiasFLOW.pListModule_class = 'documento_labels_authors_x_ndocs_';
        ausiasFLOW.initialize(component_plist().list, $('#broth_content'));
        return false;
    });
    
    
    
    
    
    
    
    
    
    
    Path.map("#/documento/list").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.listModule_paramsObject = parameter.defaultizeUrlObjectParametersForLists(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.listModule_frontOperation = 'list';
        ausiasFLOW.listModule_class = 'documento';
        ausiasFLOW.initialize(component_list().list, $('#broth_content'));
        return false;
    });
    Path.map("#/documento/list/:url").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.listModule_paramsObject = parameter.defaultizeUrlObjectParametersForLists(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.listModule_frontOperation = 'list';
        ausiasFLOW.listModule_class = 'documento';
        ausiasFLOW.initialize(component_list().list, $('#broth_content'));
        return false;
    });

    //composed operation


    function abc(params) {
        //listOperation(this.params['url']);
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Composed operation'));
        $('#broth_content').empty().append('<div id="c1"></div><div id="c2"></div>')
        c = component_table_view();

        //ausiasFLOW.initialize(Block01.list, $('#c1'), this.params['url'], 'documento');
        //ausiasFLOW.frontOperation = 'abc';
        ausiasFLOW.reset();
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.pListModule_paramsObject = params;
        ausiasFLOW.pListModule_frontOperation = 'abc';
        ausiasFLOW.pListModule_class = 'documento';

        ausiasFLOW.viewModule_paramsObject = {'id': 1}; //parameter.getUrlObjectFromUrlString(this.url); // paramsObject['id'];
        ausiasFLOW.viewModule_frontOperation = 'view';
        ausiasFLOW.viewModule_class = 'documento';

        ausiasFLOW.initialize(c.list, $('#c1'));
        ausiasFLOW.initialize(c.view, $('#c2'));

        //ausiasFLOW.initialize(Block01.view, $('#c2'), [1], 'documento'); 
        //falta dato id compartido
        //ausiasFLOW.id = 0;
//        $('.view').click(function (event) {
//            console.log('click');
//            contador++;
//            ausiasFLOW.renderComponent(z.setUrl('contador=' + contador));
//            return false;
//        })
        return false;
    }

    Path.map("#/documento/abc").to(function () {
        abc({});
    });

    Path.map("#/documento/abc/:url").to(function () {
        abc(parameter.getUrlObjectFromUrlString(this.params['url']));
    });



    Path.map("#/documento/documentosautor").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Documentos de cada autor'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.reset();
        ausiasFLOW.listModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.listModule_frontOperation = 'documentosautor';
        ausiasFLOW.listModule_class = 'documentosautor';
        ausiasFLOW.initialize(component_documentosautor().list, $('#broth_content'));
        return false;
    });


}