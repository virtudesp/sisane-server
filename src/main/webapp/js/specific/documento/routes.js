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
    var icon = '<i cla  ss="fa fa-file-text-o fa-5x"></i>';
    var fillDocumentoPageHeader = _.partial(html.getPageHeader, icon, 'Documento', _);
    var strClass = 'documento';
    //--------------------------------------------------------------------------
    Path.map("#/" + strClass + "/new(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        ausiasFLOW.reset();
        ausiasFLOW.newModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.newModule_frontOperation = 'new';
        ausiasFLOW.newModule_class = strClass;
        ausiasFLOW.initialize(documentoNew, $('#broth_content'));
        return false;
    });
    //--------------------------------------------------------------------------    
    Path.map("#/" + strClass + "/edit/:url").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Edit'));
        ausiasFLOW.reset();
        ausiasFLOW.editModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.editModule_frontOperation = 'new';
        ausiasFLOW.editModule_class = strClass;
        ausiasFLOW.initialize(editModule, $('#broth_content'));
        return false;
    });
    //--------------------------------------------------------------------------
    Path.map("#/" + strClass + "/view/:id").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('View'));
        ausiasFLOW.reset();
        ausiasFLOW.viewModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']); // paramsObject['id'];
        ausiasFLOW.viewModule_frontOperation = 'view';
        ausiasFLOW.viewModule_class = strClass;
        ausiasFLOW.initialize(viewModule, $('#broth_content'));
        return false;
    });
    //--------------------------------------------------------------------------    
    Path.map("#/" + strClass + "/list(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('List'));
        ausiasFLOW.reset();
        ausiasFLOW.listModule_paramsObject = parameter.defaultizeUrlObjectParametersForLists(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.listModule_frontOperation = 'list';
        ausiasFLOW.listModule_class = strClass;
        ausiasFLOW.initialize(listModule, $('#broth_content'));
        return false;
    });
    //--------------------------------------------------------------------------
    Path.map("#/" + strClass + "/plist(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        ausiasFLOW.reset();
        ausiasFLOW.pListModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.pListModule_frontOperation = 'plist';
        ausiasFLOW.pListModule_class = strClass;
        ausiasFLOW.initialize(pListModule, $('#broth_content'));
        return false;
    });
    //--------------------------------------------------------------------------
    Path.map("#/" + strClass + "/plist_labels_authors_x_ndocs(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        ausiasFLOW.reset();
        ausiasFLOW.pListModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.pListModule_frontOperation = 'plist';
        ausiasFLOW.pListModule_class = strClass;
        ausiasFLOW.initialize(pListModule, $('#broth_content'));
        return false;
    });
    //--------------------------------------------------------------------------
    function abc(params) {
        if (params) {
            params.vf = 4;
        }
        else {
            params = {'vf': 4};
        }
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Composed operation'));
        $('#broth_content').empty().append('<div class="col-md-8" id="c1"></div><div class="col-md-4" id="c2"></div>')
      
        ausiasFLOW.reset();
        ausiasFLOW.pListModule_paramsObject = params;
        ausiasFLOW.pListModule_frontOperation = 'abc';
        ausiasFLOW.pListModule_class = strClass;
        ausiasFLOW.viewModule_paramsObject = {'id': 1}; //parameter.getUrlObjectFromUrlString(this.url); // paramsObject['id'];
        ausiasFLOW.viewModule_frontOperation = 'view';
        ausiasFLOW.viewModule_class = strClass;
        ausiasFLOW.initialize(documentoPaginatedList, $('#c1'));
        ausiasFLOW.initialize(viewModule, $('#c2'));
        return false;
    }
    Path.map("#/" + strClass + "/abc(/:url)").to(function () {
        abc(parameter.getUrlObjectFromUrlString(this.params['url']));
    });
    //--------------------------------------------------------------------------
    Path.map("#/" + strClass + "/documentosautor").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Documentos de cada autor'));
        ausiasFLOW.reset();
        ausiasFLOW.listModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.listModule_frontOperation = 'documentosautor';
        ausiasFLOW.listModule_class = 'documentosautor';
        ausiasFLOW.initialize(documentosautorList, $('#broth_content'));
        return false;
    });


}