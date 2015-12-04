'use strict';
/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('services', [])
        .factory('serverService', function ($http) {
            function getFilter(filter, filteroperator, filtervalue) {
                var filterParams;
                if (filter) {
                    filterParams = "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
                } else {
                    filterParams = "";
                }
                return filterParams;
            }
            ;
            function getOrder(order, ordervalue) {
                var orderParams;
                if (order) {
                    orderParams = '&order=' + order + '&ordervalue=' + ordervalue;
                } else {
                    orderParams = "";
                }
                return orderParams;
            }
            ;
            return {
                getAppName: function () {
                    var strPath = window.location.pathname;
                    return strPath.substr(1, strPath.substr(1, strPath.length).indexOf('/'));
                },
                promise_getOne: function (strClass, id) {
                    return $http.get(configuration.getAppUrl() + '?ob=' + strClass + '&op=getaggregateviewone&id=' + id, 'GET', '');
                },
                promise_getMeta: function (strClass) {
                    return $http.get(configuration.getAppUrl() + '?ob=' + strClass + '&op=getmetainformation', 'GET', '');
                },
                promise_getSome: function (strClass, rpp, page, filterParams, orderParams, systemfilterParams) {
                    return $http.get(configuration.getAppUrl() + '?ob=' + strClass + '&op=getaggregateviewsome' + '&rpp=' + rpp + '&page=' + page + filterParams + orderParams + systemfilterParams, 'GET', '');
                },
                promise_getAll: function (strClass, filterParams, orderParams, systemfilterParams) {
                    return $http.get(configuration.getAppUrl() + '?ob=' + strClass + '&op=getaggregateviewall' + filterParams + orderParams + systemfilterParams, 'GET', '');
                },
                promise_removeOne: function (strClass, id) {
                    return $http.get(configuration.getAppUrl() + '?ob=' + strClass + '&op=remove&id=' + id, 'GET', '');
                },
                promise_getPromise: function (strClass, operation, params) {
                    return $http.get(configuration.getAppUrl() + '?ob=' + strClass + '&op=' + operation + params, 'GET', '');
                },
                promise_setOne: function (strClass, jsonfile) {
                    return $http.get(configuration.getAppUrl() + '?ob=' + strClass + '&op=set', 'GET', jsonfile);
                },
                getDataFromPromise: function (promise) {
                    return promise.then(function (result) {
                        return result.data;
                    });
                },
                get: function (objeto, numero) {
                    return $http.get('/' + this.appName + '/json' + objeto + '/' + numero + '/get.json').then(function (result) {
                        return result.data;
                    });
                },
                getPage: function (objeto, pagina, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
                    var orderParams = getOrder(order, ordervalue);
                    var filterParams = getFilter(filter, filteroperator, filtervalue);
                    var systemfilterParams = getFilter(systemfilter, systemfilteroperator, systemfiltervalue);
                    //console.log('/' + appName + '/' + objeto + '/' + rpp + '/' + pagina + '/getpage.json?' + filterParams + orderParams + systemfilterParams);
                    return $http.get('/' + appName + '/' + objeto + '/' + rpp + '/' + pagina + '/getpage.json?' + filterParams + orderParams + systemfilterParams).then(function (result) {
                        return result.data;
                    });
                },
                getFieldNames: function (objeto) {
                    return $http.get('/' + appName + '/' + objeto + '/getcolumns.json').then(function (result) {
                        return result.data;
                    });
                },
                getPrettyFieldNames: function (objeto) {
                    return $http.get('/' + appName + '/' + objeto + '/getprettycolumns.json').then(function (result) {
                        return result.data;
                    });
                },
                getPages: function (objeto, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
                    var filterParams = getFilter(filter, filteroperator, filtervalue);
                    var systemfilterParams = getFilter(systemfilter, systemfilteroperator, systemfiltervalue);
                    return $http.get('/' + appName + '/' + objeto + '/' + rpp + '/getpages.json?' + filterParams + systemfilterParams).then(function (result) {
                        return result.data;
                    });
                },
                remove: function (objeto, numero) {
                    return $http.get('/' + appName + '/' + objeto + '/' + numero + '/remove.json').then(function (result) {
                        return result.data;
                    });
                },
                save: function (objeto, datos) {
                    $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
//                    $http({
//                        url: '/' + appName + '/' + objeto + '/save.json',
//                        method: "GET",
//                        params: datos
//                    });

                    return $http.get('/' + appName + '/' + objeto + '/save.json', {
                        params: {'json': datos}
                        //,headers: {'Content-Type': 'application/json;charset=utf-8'}
                    }).then(function (result) {
                        return result.data;
                    });
                },
                getPaginationBar: function (objeto, accion, page_number, total_pages, neighborhood, nrpp) {
                    page_number = parseInt(page_number);
                    total_pages = parseInt(total_pages);
                    neighborhood = parseInt(neighborhood);
                    var link = '#/' + objeto + '/' + accion + '/';
                    var vector = "<div class=\"pagination\"><ul>";
                    if (page_number > 1)
                        vector += ("<li><a class=\"pagination_link\" id=\"" + (page_number - 1) + "\" href=\"" + link + (page_number - 1) + "/" + nrpp + "\">prev</a></li>");
                    if (page_number > neighborhood + 1)
                        vector += ("<li><a class=\"pagination_link\" id=\"1\" href=\"" + link + "1/" + nrpp + "\">1</a></li>");
                    if (page_number > neighborhood + 2)
                        vector += ("<li>" + "<a href=\"#\">...</a>" + "</li>");
                    for (var i = (page_number - neighborhood); i <= (page_number + neighborhood); i++) {
                        if (i >= 1 && i <= total_pages) {
                            if (page_number == i) {
                                vector += ("<li class=\"active\"><a class=\"pagination_link\" id=\"" + i + "\" href=\"" + link + i + "/" + nrpp + "\">" + i + "</a></li>");
                            } else
                                vector += ("<li><a class=\"pagination_link\" id=\"" + i + "\" href=\"" + link + i + "/" + nrpp + "\">" + i + "</a></li>");
                        }
                    }
                    if (page_number < total_pages - (neighborhood + 1))
                        vector += ("<li>" + "<a href=\"#\">...</a>" + "</li>");
                    if (page_number < total_pages - (neighborhood))
                        vector += ("<li><a class=\"pagination_link\" id=\"" + total_pages + "\" href=\"" + link + total_pages + "/" + nrpp + "\">" + total_pages + "</a></li>");
                    if (page_number < total_pages)
                        vector += ("<li><a class=\"pagination_link\"  id=\"" + (page_number + 1) + "\" href=\"" + link + (page_number + 1) + "/" + nrpp + "\">next</a></li>");
                    vector += "</ul></div>";
                    return vector;
                },
                getNrppBar: function (objeto, accion, page_number, nrpp) {
                    var link = '#/' + objeto + '/' + accion + '/';
                    var vector = "<div class=\"pagination\"><ul>";
                    if (nrpp == 5)
                        vector += "<li class=\"active\" >";
                    else
                        vector += "<li> ";
                    vector += "<a class=\"nrpp\" id=\"nrrp5\" href=\"" + link + page_number + "/5" + "\">5</a></li>";
                    if (nrpp == 10)
                        vector += "<li class=\"active\" >";
                    else
                        vector += "<li> ";
                    vector += "<a class=\"nrpp\" id=\"nrrp10\" href=\"" + link + page_number + "/10" + "\">10</a></li>";
                    if (nrpp == 20)
                        vector += "<li class=\"active\" >";
                    else
                        vector += "<li> ";
                    vector += "<a class=\"nrpp\" id=\"nrrp20\" href=\"" + link + page_number + "/20" + "\">20</a></li>";
                    if (nrpp == 50)
                        vector += "<li class=\"active\" >";
                    else
                        vector += "<li> ";
                    ;
                    vector += "<a class=\"nrpp\" id=\"nrrp50\" href=\"" + link + page_number + "/50" + "\">50</a></li>";
                    if (nrpp == 100)
                        vector += "<li class=\"active\" >";
                    else
                        vector += "<li> ";
                    vector += "<a class=\"nrpp\" id=\"nrrp100\" href=\"" + link + page_number + "/100" + "\">100</a></li>";
                    // http://localhost:8081/AjaxStockUniDaoSpring/index.jsp#/cliente/4/nrpp
                    vector += "</ul></div>";
                    return vector;
                }

            };
        })
        .factory('sharedSpaceService', function ($http) {
            var object = {id: 0};
            var link = {value: ""};
            var dirty = {value: false};

            return {
                getObject: function () {
                    return object;
                },
                setObject: function (value) {
                    object = value;
                },
                getReturnLink: function () {
                    return link;
                },
                setReturnLink: function (value) {
                    link = value;
                },
                getIsDirty: function () {
                    return dirty;
                },
                setIsDirty: function (value) {
                    dirty = value;
                }
            };
        })
        .value('version', '0.1');
