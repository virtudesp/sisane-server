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

var session = {
    getSessionPromise: function () {
        return ns.ajax.callSync(config.getAppUrl() + '?op=status', 'GET', '');
    },
    checkAndUpdateUserConnectionState: function () {
        $.when(session.getSessionPromise()).done(function (data) {
            if (data['status'] == 200) {
                $('#broth_username_id').text(data.message);
                $('.broth_show_when_logged_in').show();
                $('.broth_show_when_logged_out').hide();
                //$("#broth_username_menu_id").css('display', 'block', 'important');
                login.unloadLoginForm();
                appInit();
            } else {
                $('#broth_username_id').text("Login");
                $('.broth_show_when_logged_in').hide();
                $('.broth_show_when_logged_out').show();
                //$("#broth_username_menu_id").css('display', 'none', 'important');
                login.loadLoginForm();
            }
        });
    }
}