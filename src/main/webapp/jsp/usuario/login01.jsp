<%-- 
    Document   : login
    Created on : Jan 15, 2013, 11:54:03 AM
    Author     : rafa
--%>

<%-- 
<form id="loginForm" action="jsp" role="form" method="post">
    <h1>Formulario de entrada al sistema</h1>
    <input type="hidden" name="ob" value="usuario" />
    <input type="hidden" name="op" value="login02" />
    <div class="control-group">
        <label class="control-label" for="inputLogin">Usuario:</label>
        <div class="controls">
            <input type="text" id="inputLogin" autofocus="autofocus" placeholder="Nombre de usuario" name="login">
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputPassword">Password:</label>
        <div class="controls">
            <input type="password" id="inputPassword" placeholder="Password" name="password">
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button id="entrarBTN" type="submit" class="btn">Entrar</button>
        </div>
    </div>
</form>
--%>


<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">

            <img class="pull-left" src="fonts/user.png" alt="user image" style="padding: 20px 10px 5px 0" />

            <h1>Formulario de entrada al sistema</h1>
            <form class="form-signin" id="loginForm" action="jsp" role="form" method="post">                    
                
                    <input type="hidden" name="ob" value="usuario" />
                    <input type="hidden" name="op" value="login02" />
                
                        <label class="control-label" for="inputLogin" style="margin-top: 15px">Usuario:</label>
                        <input class="form-control"  id="inputLogin" type="text" placeholder="nombre de usuario"  required="" autofocus="" name="login" />
                
                    
                
                        <label class="control-label" for="password" style="margin-top: 15px">Password:</label>
                        <input class="form-control" type="password" id="inputPassword" placeholder="contraseña"  required="" name="password" />
                
                    
                
                
                    <button class="btn btn-lg btn-primary btn-block" type="submit"  style="margin-top: 15px">Acceder</button>   

                    <button class="btn btn-lg btn-danger btn-block" type="reset" style="margin-top: 5px">Reset</button>
                

            </form>
        </div>
    </div>
</div>


