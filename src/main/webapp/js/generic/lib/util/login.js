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


var login = {
    loadLoginForm: function () {
        //$('#loginFormBroth').css('display', 'block');
        //$("#documentoForm").append(thisObject.getEmptyModal());
        $("#broth_login_modal_footer").html("");
        ns.html.modal.load('#broth_modal_login', true);
        //$('#broth_modal_login').css('width', '20%');

        $("#broth_button_login").unbind('click');
        $("#broth_button_login").click(function () {
            username = $("#broth_input_login").val();
            password = $("#broth_input_password").val();
            $("#broth_login_modal_footer").html("Please, wait while contacting server for authentication...");
            $.ajax({
                type: "POST",
                url: "json",
                data: "ob=user&op=login&login=" + username + "&password=" + password,
                success: function (response) {
                    if (response.status == 200) {
                        $("#broth_login_modal_footer").html("Welcome, you're allowed to enter the site!");
                        $('#broth_username_id').text(response.message);
                        $('.broth_show_when_logged_in').show();
                        $('.broth_show_when_logged_out').hide();
                        //$("#broth_username_menu_id").css('display', 'block', 'important');
                        login.unloadLoginForm();
                        appInit();
                    } else {


                        $('.broth_show_when_logged_in').hide();
                        $('.broth_show_when_logged_out').show();
                        $("#broth_login_modal_footer").html("Login, password or both are incorrect. Please try it again.");
                    }
                }
            });
            return false;
        });
    },
    unloadLoginForm: function () {
        //$("#login").unbind('click');
        //$('#loginFormBroth').css('display', 'none');
        $('#broth_modal_login').modal('hide');
    }
}