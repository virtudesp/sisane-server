<%-- 
    Document   : formulariocambiar
    Created on : 21-nov-2014, 0:58:59
    Author     : asus-pc
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-md-offset-4">
                    <img class="pull-left" src="fonts/user.png" alt="user image" style="padding: 20px 10px 5px 0" />
                    <h1>Formulario de entrada al sistema</h1>
                    <form class="form-signin" id="loginForm" action="json" role="form" method="get">                                    
                        <input type="hidden" name="op" value="updateone" />     
                        <label class="control-label" for="ob" style="margin-top: 15px">Escribe el nombre de la tabla:</label>
                        <input value="" class="form-control"  id="ob" type="text" placeholder="nombre de usuario" required="" autofocus="" name="ob" />  
                        <label class="control-label" for="id" style="margin-top: 15px">Escribe el id del registro que quieres cambiar:</label>
                        <input value="" class="form-control"  id="id" type="text" placeholder="nombre de usuario" required="" autofocus="" name="id" />
                        <label class="control-label" for="campo" style="margin-top: 15px">Escribe el campo que quieres cambiar:</label>
                        <input value="" class="form-control"  id="campo" type="text" placeholder="nombre de usuario" required="" autofocus="" name="campo" />
                        <label class="control-label" for="valor" style="margin-top: 15px">Escribe el nuevo valor para ese campo:</label>
                        <input value="" class="form-control"  id="valor" type="text" placeholder="nombre de usuario" required="" autofocus="" name="valor" />
                        <button class="btn btn-lg btn-primary btn-block" type="submit" style="margin-top: 15px">Cambiar</button>                           
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
