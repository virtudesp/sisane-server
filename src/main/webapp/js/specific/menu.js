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


appMenu = function () {
    return (
            dom.li('', //'class="active"'
                    dom.a('href="#/home"', 'Home')
                    ) +
            dom.li('',
                    dom.a('href="#/about"',
                            dom.i('class="fa fa-icon-smile"', '') +
                            'About'
                            )
                    ) +
            dom.li('class="dropdown"',
                    dom.a('href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"',
                            dom.i('class="fa fa-icon-list-alt"', '') +
                            'Documento' +
                            dom.span('class="caret"', '')
                            ) +
                    dom.ul('class="dropdown-menu" role="menu"',
                            dom.li('class="dropdown-header"', 'Json') +
                            dom.li('',
                                    dom.a('href="http://localhost:8081/ausiasBroth2015/json?ob=documentosautor&op=getall"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documentos autor json 1'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="http://localhost:8081/ausiasBroth2015/json?ob=documento_labels_x_ndocs_&op=getall"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documentos autor json 2'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="http://localhost:8081/ausiasBroth2015/json?ob=documento_labels_x_ndocs_&op=getall&filter=numetiquetas&filteroperator=equals&filtervalue=4"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documentos autor json 3'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="http://localhost:8081/ausiasBroth2015/json?ob=documentosautor&op=getaggregateviewsome"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documentos autor json getaggregateviewsome'
                                            )
                                    ) +
                            dom.li('class="divider"', '') +
                            dom.li('class="dropdown-header"', 'Simple modules') +
                            dom.li('',
                                    dom.a('href="#/documento/plist/page=1&rpp=10"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documento paginated list'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/documento/list"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documento list'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/documento/new"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'New documento'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/documento/new/usuario=2&tipodocumento=3"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'New documento con ajenas'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/documento/edit/1"',
                                            dom.i('class="fa fa-fw fa-power-off"', '') +
                                            'edit Documento 1'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/documento/view/1"',
                                            dom.i('class="fa fa-fw fa-power-off"', '') +
                                            'view Documento 1'
                                            )
                                    ) +
                            dom.li('class="dropdown-header"', 'Complex modules') +
                            dom.li('',
                                    dom.a('href="#/documento/abc"',
                                            dom.i('class="fa fa-fw fa-power-off"', '') +
                                            'Documento abc'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/documento/documentosautor"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documentos x autor list'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/documento/plist_labels_authors_x_ndocs"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documentos labels_authors_x_ndocs'
                                            )
                                    )
                            )
                    ) +
            dom.li('class="dropdown"',
                    dom.a('href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"',
                            dom.i('class="fa fa-icon-list-alt"', '') +
                            'Mantenimientos' +
                            dom.span('class="caret"', '')
                            ) +
                    dom.ul('class="dropdown-menu" role="menu"',
                            dom.li('',
                                    dom.a('href="#/documento/plist"',
                                            dom.i('class="fa fa-fw fa-file-text"', '') +
                                            'Documentos'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/tipodocumento/plist"',
                                            dom.i('class="fa fa-fw fa-tag"', '') +
                                            'Tipos de documento'
                                            )
                                    ) +
                            dom.li('',
                                    dom.a('href="#/usuario/plist"',
                                            dom.i('class="fa fa-fw fa-user"', '') +
                                            'Usuarios'
                                            )
                                    )

                            )
                    )
            )
}