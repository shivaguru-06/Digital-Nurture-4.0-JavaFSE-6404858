import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cohort Dashboard heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /cohort dashboard/i });
  expect(headingElement).toBeInTheDocument();
});
