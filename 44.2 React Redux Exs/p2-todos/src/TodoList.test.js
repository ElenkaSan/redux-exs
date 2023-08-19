import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import TodoList from './TodoList';

// Create a mock store with the rootReducer
const store = createStore(rootReducer);

describe('TodoList Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });
});
