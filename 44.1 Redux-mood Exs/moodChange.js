document.addEventListener('DOMContentLoaded', function () {
    const store = Redux.createStore(emojiReducer);
  
    const emoji = document.querySelector('#emoji');

    const initialState = store.getState();
    // console.log('Initial State:', initialState);
    emoji.innerText = initialState.emoji;

    // Subscribe to store changes
    // store.subscribe(() => {
    //   const initialState = store.getState();
    //   console.log('Updated State:', initialState);
    //   emoji.innerText = initialState.emoji; // Update the emoji displayed in the UI
    // });

    const happyBtn = document.querySelector('#happy');
    const sadBtn = document.querySelector('#sad');
    const angryBtn = document.querySelector('#angry');
    const confusedBtn = document.querySelector('#confused');
  
    happyBtn.addEventListener('click', function () {
      store.dispatch({ type: 'happy_emoji', payload: '٩(◕<>◕｡)۶' });
      const state = store.getState();
      emoji.innerText = state.emoji;
    });
  
    sadBtn.addEventListener('click', function () {
        //   console.log("Clicks sad_emoji!")
          store.dispatch({ type: 'sad_emoji', payload: '(ಥ﹏ಥ)' });
          const state = store.getState();
          emoji.innerText = state.emoji;
    })
        
    angryBtn.addEventListener('click', function () {
          store.dispatch({ type: 'angry_emoji', payload: '٩(ఠ益ఠ)۶' });
          const state = store.getState();
          emoji.innerText = state.emoji;
    })
        
    confusedBtn.addEventListener('click', function () {
          store.dispatch({ type: 'confused_emoji', payload: 'ლ(ಠ_ಠ)ლ' });
          const state = store.getState();
          emoji.innerText = state.emoji;
    })

  });