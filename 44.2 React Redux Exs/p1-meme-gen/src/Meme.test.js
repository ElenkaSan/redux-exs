import React from 'react';
import { render, screen } from '@testing-library/react';
import Meme from './Meme';

let mem;
beforeEach(() => {
  mem = render(
    <Meme
      urlLink="https://media2.giphy.com/media/KPZhv4wNSpaJNfuAzM/200w.webp"
      topText="Haha check"
      bottomText="No way"
    />
  );
})
it('renders', () => {
  expect(mem).not.toBeNull();
});
it('matches snapshot', () => {
  expect(mem.asFragment()).toMatchSnapshot();
});
it('applies url link prop to image src alt', () => {
  const img = screen.getByAltText('meme');
  
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute(
    'src',
    'https://media2.giphy.com/media/KPZhv4wNSpaJNfuAzM/200w.webp'
  );
});
