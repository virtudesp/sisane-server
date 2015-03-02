///*
// * Copyright (C) July 2014 Rafael Aznar
// *
// * This program is free software; you can redistribute it and/or
// * modify it under the terms of the GNU General Public License
// * as published by the Free Software Foundation; either version 2
// * of the License, or (at your option) any later version.
// *
// * This program is distributed in the hope that it will be useful,
// * but WITHOUT ANY WARRANTY; without even the implied warranty of
// * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// * GNU General Public License for more details.
// *
// * You should have received a copy of the GNU General Public License
// * along with this program; if not, write to the Free Software
// * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
// */
//package net.daw.control.route.generic.implementation;
//
//import javax.servlet.http.HttpServletRequest;
//import net.daw.control.route.publicinterface.ControlRouteInterface;
//import net.daw.helper.statics.ExceptionBooster;
//import net.daw.helper.statics.ParameterCooker;
//import net.daw.service.publicinterface.MetaServiceInterface;
//import net.daw.service.publicinterface.ViewServiceInterface;
//
//public class ControlRouteGenImpl implements ControlRouteInterface {
//
//
//
//    @Override
//    public String execute(HttpServletRequest request) throws Exception {
//        
//        
//        
//
//                
//                
//                
//        
//        String strClassName = "net.daw.service.specific.implementation." + ParameterCooker.prepareCamelCaseObject(request) + "ServiceSpImpl";
//        MetaServiceInterface oService = (MetaServiceInterface) Class.forName(strClassName).getDeclaredConstructor(HttpServletRequest.class).newInstance(request);
//        String operation = ParameterCooker.prepareOperation(request);
//        String jsonResult = "";
//        try {
//            switch (operation) {
//                case "get":                                        
//                    //ViewServiceInterface oService = (ViewServiceInterface) Class.forName(strClassName).getDeclaredConstructor(HttpServletRequest.class).newInstance(request);                                                                                                    
//                    jsonResult = oService.get(ParameterCooker.prepareId(request));
//                    break;
//                case "getaggregateviewone":
//                    jsonResult = oControl.getaggregateviewone(request);
//                    break;
//                case "updateone":
//                    jsonResult = oControl.updateOne(request);
//                    break;
//                case "getprettycolumns":
//                    jsonResult = oControl.getprettycolumns(request);
//                    break;
//                case "getcolumns":
//                    jsonResult = oControl.getcolumns(request);
//                    break;
//                case "getpage":
//                    jsonResult = oControl.getpage(request);
//                    break;
//                case "getpages":
//                    jsonResult = oControl.getpages(request);
//                    break;
//                case "getregisters":
//                    jsonResult = oControl.getregisters(request);
//                    break;
//                case "getaggregateviewsome":
//                    jsonResult = oControl.getaggregateviewsome(request);
//                    break;
//                case "remove":
//                    jsonResult = oControl.remove(request);
//                    break;
//                case "set":
//                    jsonResult = oControl.set(request);
//                    break;
//                default:
//                    
//                    
//                    
//                    
//                    Method oMethodService = MetaServiceInterface.class.getMethod(ParameterCooker.prepareCamelCaseOperation(request));
//                    jsonResult = (String) oMethodService.invoke(oService);
//                    
//                    
//                    
//                    ExceptionBooster.boost(new Exception(this.getClass().getName() + ":execute ERROR: error de operación: la operación no existe"));
//                    break;
//            }
//        } catch (Exception ex) {
//            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":execute ERROR: " + ex.getMessage()));
//        }
//        return jsonResult;
//    }
//
//}
