import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

test('renders learn react link', () => {
  render(<Provider store={store}>
           <App/>
         </Provider>);
  const linkElement = screen.getByText(/Generate your Meme/i);
  expect(linkElement).toBeInTheDocument();
});
