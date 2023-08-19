const INITIAL_STATE = { emoji: '>(^Ь^)<' }

const emojiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'happy_emoji':
      return { ...state, emoji: action.payload }
    case 'sad_emoji':
      return { ...state, emoji: action.payload }
    case 'angry_emoji':
      return { ...state, emoji: action.payload }
    case 'confused_emoji':
      return { ...state, emoji: action.payload }
    default:
      return state
  }
}

const store = Redux.createStore(emojiReducer);