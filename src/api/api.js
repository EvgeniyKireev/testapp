
import $ from "jquery";

export const api = {
    getListPhoto() {
        // return axios.get('https://api.vk.com/method/photos.getAll?PARAMETERS&access_token=7d4cd8e66653d88fa2bd0284cc98028d1d060b5387a8dc57e1226f32eec5b24d11582503fbadf4d3cfd9d&owner_id=1&extended=1&v=5.124',)
        return $.ajax({
            url: 'https://api.vk.com/method/photos.getAll?PARAMETERS&access_token=7d4cd8e66653d88fa2bd0284cc98028d1d060b5387a8dc57e1226f32eec5b24d11582503fbadf4d3cfd9d&owner_id=1&extended=1&v=5.124&count=20',
            type: 'GET',
            dataType: 'jsonp',
            crossDomain: true,
            success: function(data){
                return data
            }
        });
    }
}