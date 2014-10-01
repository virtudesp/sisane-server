<%@page import="net.daw.helper.AppInformation"%>
<div class="jumbotron">
    <h1>Bienvenidos a <%=AppInformation.getAppName()%> 2014</h1>
    <h3>Versión (v.02) de 1/10/2014</h3>
    <h5>Desarrollo de aplicaciones web. CPIFP Ausiàs March. Curso 2014-2015</h5>    
</div>
<div class="row">
    <div class="col-md-8">
        <div class="row">
            <div class="col-md-6">
                <h3>¿Qué es <%=AppInformation.getAppName()%>?</h3>
                <p>Es una aplicación didáctica para aprender a organizar y desarrollar 
                    aplicaciones AJAX. Está pensado para soportar mantenimientos 
                    CRUDL (create remove update delete list).</p>
            </div>
            <div class="col-md-6">
                <h3>¿Para qué sirve?</h3>
                <p>Se trata de una aplicación de carácter didáctico. 
                    Se ha estructurado siguiendo un modelo MVC que permita a los alumnos 
                    conocer un referente para diseñar en un futuro sus proyectos.                    
                </p>
            </div>    
        </div>
        <div class="row">    
            <div class="col-md-6">
                <h3>¿Quién la ha desarrollado?</h3>
                <p>La ha desarrollado Rafael Aznar,
                    profesor de DAW en el CPIFP Ausiàs March de Valencia (Spain).
                    Puedes contactar en raznar {at} ausiasmarch {dot} net.</p>
            </div> 
            <div class="col-md-6">
                <h3>¿Qué licencia tiene?</h3>
                <p>La he liberado con licencia <a href="http://www.gnu.org/licenses/gpl-2.0.html">GNU General Public License, version 2</a></p>
            </div>

        </div>
    </div>
    <div class="col-md-4">
        <h3>¿Cuáles son sus características?</h3>
        <ul>
            <li>Es un desarrollo didáctico</li>
            <li>Estructura de servidor MVC por niveles sin frameworks</li> 
            <li>Servidor escrito en Java (servlets y jsp)</li>  
            <li>Dos controladores, uno para servir jsp y otro para servir json</li>  
            <li>Cliente AJAX con Javascript y JQuery</li>              
            <li>Cliente desarrollado sobre Bootstrap responsivo</li>
            <li>Acceso a datos (base de datos MySQL) mediante clases de negocio y DAO</li>
            <li>Mantenimientos paginados</li>
            <li>Ajax Stock soporta Relaciones 1:M</li>
            <li>Ajax Stock soporta Relaciones M:M</li>
        </ul>
    </div>
</div>
