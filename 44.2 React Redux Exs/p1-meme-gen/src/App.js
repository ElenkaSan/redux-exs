import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Meme from "./Meme";

import './App.css';
import MemeForm from "./MemeForm";

function App() {
  const meme = useSelector(takeState => takeState.meme);
  const dispatch = useDispatch();

  function addingMeme(newMem) {
    dispatch({type: "Add", mem: newMem});
  }

  function deleteMeme(id) {
    dispatch({type: "Delete", id});
  }

  const memeGenerate = meme.map(mem => ( 
            <Meme
               key={mem.id}
               urlLink={mem.urlLink}
               topText={mem.topText}
               bottomText={mem.bottomText}
               deleteMeme={() => deleteMeme(mem.id)}
             />
    )
  );

  return (
    <div className="App">
      <header className="App-header">
        <MemeForm addingMeme={addingMeme} />
       {memeGenerate}
      </header>
    </div>
  );
}

export default App;
