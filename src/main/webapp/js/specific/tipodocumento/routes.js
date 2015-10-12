/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


function fDocumentoRoutes() {
    var dataFromServer = $.Deferred();
    var icon = '<i class="fa fa-file-text-o fa-5x"></i>';
    var fillDocumentoPageHeader = _.partial(html.getPageHeader, icon, 'Documento', _);
    var strClass = 'tipodocumento';

    Path.map("#/documento/new").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        ausiasFLOW.reset();
        ausiasFLOW.newModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.newModule_frontOperation = 'new';
        ausiasFLOW.newModule_class = 'tipodocumento';
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
        $('#broth_content').empty().append('<div class="col-md-8" id="c1"></div><div class="col-md-4" id="c2"></div>')
        

        
        
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
        abc({"vf":4});
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