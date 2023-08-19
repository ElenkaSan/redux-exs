import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Import your rootReducer
import App from './App';

test('renders learn react link', () => {
  // Create a mock store with the rootReducer
  const store = createStore(rootReducer);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  const headerElement = screen.getByText('Time to create todo list.');
  expect(headerElement).toBeInTheDocument();
});
