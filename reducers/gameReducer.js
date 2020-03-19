export default (state = [], action) => {
    switch(action.type){
        case 'SET_GAMES':
            return action.games
        case 'ADD_REVIEW':
            return [...state, action.review]
        case 'UDPATE_REVIEW':
            return state.map((item) => {
                if(item.key == action.key){
                    return {
                        ...item,
                        ...action.updates
                    }
                }
                return item
            })
        default:
            return state
    }
}