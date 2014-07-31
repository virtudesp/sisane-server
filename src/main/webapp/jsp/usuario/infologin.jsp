<%-- 
    Document   : infologin
    Created on : Jan 19, 2013, 9:28:49 AM
    Author     : rafa
--%>
<%@page import="net.daw.bean.implementation.UsuarioBeanImpl"%>
<%UsuarioBeanImpl user = (UsuarioBeanImpl) request.getSession().getAttribute("usuarioBean");%>
<%
if (user != null) {
    String us = user.getLogin();
    String usuario = us.substring(0, 1).toUpperCase() + us.substring(1);
%>
<li>
    <%-- 
    <a href="#"> <i class="icon-user">Estás logueado como <%=usuario%> / <%=user.getTipoUsuario()%></i></a>
    --%>
    <a href="#"> <i class="icon-user">Estás logueado como <%=usuario%></i></a>
</li>
<li><a href="jsp?ob=usuario&op=logout">(Salir del sistema)</a></li>
<%} else {%>
<li><a href="jsp?op=login01&ob=usuario">Login</a></li><%}%>
