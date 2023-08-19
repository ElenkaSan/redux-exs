import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import MemeForm from "./MemeForm";

let memeForm;

describe("<MemeForm /> basics", () => {
  beforeEach(() => {
    memeForm = render(<MemeForm />)
  })
  
  it('renders', () => {
    expect(memeForm).toBeTruthy();
  });
  it('matches snapshot', () => {
    expect(memeForm.asFragment()).toMatchSnapshot();
  });
})

it('updates state with topText input from form', () => {
  const mockFn = jest.fn();
  render(<MemeForm addingMeme={mockFn} />);
  fireEvent.click(screen.getByText(/Check Your Meme!/i));
  expect(mockFn).toHaveBeenCalled();
});
