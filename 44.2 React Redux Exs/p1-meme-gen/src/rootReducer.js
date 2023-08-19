const DEFAULT_STATE = { meme: []};

function rootReducer(state = DEFAULT_STATE, action) {
    if(action.type === "Add") {
        return { 
            ...state, meme: [...state.meme, { ...action.mem}]
        };
    }
    if(action.type === "Delete") {
        return{
            ...state, meme: state.meme.filter(mem => mem.id !== action.id)
        };
    }
    return state;
}

export default rootReducer;