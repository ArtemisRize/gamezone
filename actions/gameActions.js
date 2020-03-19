import uuid from 'react-native-uuid';

export const setGames = (games = []) => ({
    type: 'SET_GAMES',
    games
})

export const addReview = ({body, rating,title,key}={}) => ({
    type:'ADD_REVIEW',
    review:{
        body,
        rating,
        title,
        key
    }
})

export const editReview = (updates={}, key) => ({
    type:'UDPATE_REVIEW',
    updates,
    key
})