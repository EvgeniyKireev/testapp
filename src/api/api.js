import * as axios from "axios";

const instance = axios.create({});

const sample = axios.create({
    withCredentials: true,
    baseURL: "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=e9746f1ae419712b1e47eeb2c3ce9699&format=json&nojsoncallback=1",
})

export const api = {
    //TODO: разобраться почему не приходят данные с сервера!
    getListPhoto() {
        return sample.get(`&user_id=kostakis&page=2`).then((response) => {
            return response.photos;
        })
    },
    getPhoto(serverId, id, secret) {
        return instance.get(`${serverId}/${id}_${secret}.jpg`).then((response) => {
            return response.data;
        });
    }
}