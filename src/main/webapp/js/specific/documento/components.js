var component_edit = (function () {
    var dom = ausiasDOM.dom;
    return {
        edit: editModule
    }
})
var component_new = (function () {
    var dom = ausiasDOM.dom;
    return {
        new: newModule
    }
})

var component_plist = (function () {
    var dom = ausiasDOM.dom;
    return {
        list: paginatedListModule
    }
})

var component_list = (function () {
    return {
        list: listModule
    }
})

var component_view = (function () {
    var dom = ausiasDOM.dom;
    return {
        view: viewModule
    }
})

var component_table_view = (function () {

    //var dom = ausiasDOM.dom;
    return {
        view: documentoView,
        list: documentoPaginatedList
    }
});



