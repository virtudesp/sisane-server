<%-- 
    Document   : formulariocambiar
    Created on : 21-nov-2014, 0:58:59
    Author     : asus-pc
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Ajax Yield</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/main.css">
        <!-- <link rel="stylesheet" href="css/jquery-ui.css"> -->
        <link rel="stylesheet" href="css/animate.css">
        <link rel="stylesheet" href="css/bootstrapValidator.min.css">
        <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"  />
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
                        <input value="" class="form-control"  id="ob" type="text" placeholder="nombre de TABLA" required="" autofocus="" name="ob" />  
                        <label class="control-label" for="id" style="margin-top: 15px">Escribe el id del registro que quieres cambiar:</label>
                        <input value="" class="form-control"  id="id" type="text" placeholder="ID del registro" required="" autofocus="" name="id" />
                        <label class="control-label" for="campo" style="margin-top: 15px">Escribe el campo que quieres cambiar:</label>
                        <input value="" class="form-control"  id="campo" type="text" placeholder="CAMPO" required="" autofocus="" name="campo" />
                        <label class="control-label" for="valor" style="margin-top: 15px">Escribe el nuevo valor para ese campo:</label>
                        <input value="" class="form-control"  id="valor" type="text" placeholder="VALOR para ese campo" required="" autofocus="" name="valor" />
                        <button class="btn btn-lg btn-primary btn-block" type="submit" style="margin-top: 15px">Cambiar</button>                           
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
