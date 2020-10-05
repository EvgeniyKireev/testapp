import {api} from "../api/api";

const SET_PHOTOS = "SET_PHOTOS";
const SET_URLS = 'SET_URLS';
const SET_INFO = 'SET_INFO';
let initialState = {
    photos: '',
};

export const setUrls = (urls) => ({type: SET_URLS, urls});
const setPhotos = (photos) => ({type: SET_PHOTOS, photos});

export const getPhotos = () => (dispatch) => {
    return api.getListPhoto().then((response) => {
            dispatch(setPhotos(response.response.items));

    });
}



export let pubReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {...state, photos: action.photos}
        case SET_URLS:
            return {...state, urlsPhotos: action.urls}
        default:
            return state;
    }
};