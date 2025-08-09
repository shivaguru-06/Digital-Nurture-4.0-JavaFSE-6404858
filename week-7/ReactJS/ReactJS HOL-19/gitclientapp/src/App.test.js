import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import GitClient from './GitClient';

jest.mock('./GitClient', () => ({
  __esModule: true,
  default: { getRepositories: jest.fn() }
}));

test('renders Git Repositories heading', async () => {
  GitClient.getRepositories.mockResolvedValue(['repo1', 'repo2']);

  render(<App />);

  const heading = await screen.findByText(/git repositories/i);
  expect(heading).toBeInTheDocument();
  expect(GitClient.getRepositories).toHaveBeenCalled();
});
