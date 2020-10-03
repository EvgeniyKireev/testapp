import {api} from "../api/api";

const SET_PHOTOS = "SET_PHOTOS";
const SET_URLS = 'SET_URLS';
let initialState = {
    photos: {photo: ''},
    urlsPhotos: null
};

export const setUrls = (urls) => ({type: SET_URLS, urls});

const setPhotos = (photos) => ({type: SET_PHOTOS, photos});

export const getPhotos = () => (dispatch) => {
    return api.getListPhoto().then((response) => {
        if(response.status === 200)
        {
            dispatch(setPhotos(response.data.photos));
        }
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