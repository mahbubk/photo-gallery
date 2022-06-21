import { combineReducers } from "redux";
import * as actionTypes from './actionTypes';

const photoReducer = (photoState = { isLoading: false, photos: [], errMess: null }, action) => {
    switch (action.type) {
        case actionTypes.PHOTOS_LOADING:
            return {
                ...photoState,
                isLoading: true,
                photos: []
            }
        case actionTypes.LOAD_PHOTOS:
            return {
                ...photoState,
                isLoading: false,
                photos: action.payload
            }
        case actionTypes.PHOTOS_FAILED:
            return {
                ...photoState,
                isLoading: false,
                errMess: action.payload,
                photos: []
            }
        default:
            return photoState;
    }
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            };
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            // comment.id = commentState.length;
            // comment.date = new Date().toDateString();
            // console.log(comment);
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;
    }
}


const INITIAL_STATE = {
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload
            }
        default:
            return state;

    }
}

export const Reducer = combineReducers({
    photos: photoReducer,
    comments: commentReducer,
    authentication: authReducer
})