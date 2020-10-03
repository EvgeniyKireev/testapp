import * as axios from "axios";


export const api = {
    getListPhoto() {
        return axios({
            method: 'get',
            url: "https://api.flickr.com/services/rest",
            params: {
                method: "flickr.people.getPhotos",
                api_key: "4d30c853b319981c1512bcefd093111e",
                page: 1,
                format: "json",
                nojsoncallback: 1,
                user_id: "kostakis"
            }
        })
    },
    getInfoPhoto(id) {
        return axios({
            method: 'get',
            url: 'https://api.flickr.com/services/rest',
            api_key: "4d30c853b319981c1512bcefd093111e",
            format: "json",
            photo_id: id,
            nojsoncallback: 1,
        })
    }
}