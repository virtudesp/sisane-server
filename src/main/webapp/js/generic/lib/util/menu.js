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


appMenu = function () {
return (
        '<li class="active"><a href="#">Home</a></li>\n\
                        <li><a href="#about"><i class="fa fa-icon-smile"></i> About</a></li>\n\
                        <li class="dropdown">\n\
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" >\n\
                                <i class="fa fa-icon-list-alt"></i>\n\
                                Entidades\n\
                                <span class="caret"></span>\n\
                            </a>\n\
                            <ul class="dropdown-menu" role="menu">\n\
                            <li class="dropdown-header">Json</li>\n\
                                <li><a href="http://localhost:8081/ausiasBroth2015/json?ob=documentosautor&op=getall"><i class="fa fa-fw fa-file-text"></i> Documentos autor json</a></li>\n\
                                <li><a href="http://localhost:8081/ausiasBroth2015/json?ob=minidocumento&op=getall"><i class="fa fa-fw fa-file-text"></i> Documentos autor json</a></li>\n\
                                <li><a href="http://localhost:8081/ausiasBroth2015/json?ob=minidocumento&op=getall&filter=numetiquetas&filteroperator=equals&filtervalue=4"><i class="fa fa-fw fa-file-text"></i> Documentos autor json</a></li>\n\
                                <li class="divider"></li>\n\
                                <li class="dropdown-header">Simple modules</li>\n\
                                <li><a href="#/documento/plist/page=1&rpp=10"><i class="fa fa-fw fa-file-text"></i> Documento paginated list</a></li>\n\
                                <li><a href="#/documento/list"><i class="fa fa-fw fa-file-text"></i> Documento list</a></li>\n\
                                <li><a href="#/documento/new"><i class="fa fa-fw fa-user"></i> New Documento</a></li>\n\
                                <li><a href="#/documento/edit/1"><i class="fa fa-fw fa-power-off"></i> edit Documento 1</a></li>\n\
                                <li><a href="#/documento/view/1"><i class="fa fa-fw fa-power-off"></i> view Documento 1</a></li>\n\
                                <li class="dropdown-header">Complex modules</li>\n\
                                <li><a href="#/documento/abc"><i class="fa fa-fw fa-file-text"></i> Documento abc</a></li>\n\
                                <li><a href="#/documento/documentosautor"><i class="fa fa-fw fa-file-text"></i> Documentos x autor list</a></li>\n\
                            </ul>\n\
                        </li>'
        );
        };