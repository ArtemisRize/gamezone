export const setGames = (games = []) => ({
    type: 'SET_GAMES',
    games
})

export const addReview = ({body, rating,title}={}) => ({
    type:'ADD_REVIEW',
    review:{
        body,
        rating,
        title,
        key: Math.random().toString()
    }
})