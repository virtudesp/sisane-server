/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var control_tipodocumento = function(path) {
    //contexto privado

    var prefijo_div = "#tipodocumento_list ";

   





    return {
        new : function(objModel, objView, place) {
           
        },
        view: function(objModel, objView, place, id) {
           
        },
        edit: function(objModel, objView, place, id) {
          

        },
        remove: function(objModel, objView, place, id) {
           
        },
        list: function(objModel, objView, place, objParams, callbackLinkParameters) {
         
            //get html template from server and show it
            $(place).empty().append(objView.getPanel("Listado de " + objModel.getName(), objView.getEmptyList()));
            //show page links pad
          
        },
        modalListEventsLoading: function(objModel, objView, place, objParams, callbackLinkParameters) {

          
        },
        modalListillo: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue) {

            
        }
    };
};
