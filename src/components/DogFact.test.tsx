import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act } from '@testing-library/react';
import DogFact from './DogFact';

describe('DogFact', () => {
  const mockFetch = (fact: string) =>
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ facts: [fact] }),
    } as unknown as Response);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and displays a new fact when the button is clicked', async () => {
    const user = userEvent.setup();
    
    // Mock initial fetch
    mockFetch('Initial dog fact');
    
    await act(async () => {
      render(<DogFact />);
    });
    
    // Wait for initial fact to load
    await waitFor(() => {
      expect(screen.getByText('Initial dog fact')).toBeInTheDocument();
    });
    
    // Mock next fetch with different fact
    mockFetch('New dog fact');
    
    // Click the button and wait for effects
    const button = screen.getByRole('button', { name: /fetch new fact/i });
    await act(async () => {
      await user.click(button);
    });
    
    // Wait for fetch and state updates to complete
    await waitFor(() => {
      expect(screen.getByText('New dog fact')).toBeInTheDocument();
    });
    
    // Verify fetch was called twice (initial + button click)
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://dog-api.kinduff.com/api/facts');
  });
});