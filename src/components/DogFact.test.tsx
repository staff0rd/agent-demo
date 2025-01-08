import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import DogFact from './DogFact';

const mockFetch = (fact: string) =>
  vi.mocked(fetch).mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ facts: [fact] }),
  } as unknown as Response);

describe('DogFact', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and displays a new fact when the button is clicked', async () => {
    // Mock initial fetch
    mockFetch('Initial dog fact');
    
    // Render component
    render(<DogFact />);
    
    // Wait for initial fact to load
    await screen.findByText('Initial dog fact');
    
    // Mock next fetch with different fact
    mockFetch('New dog fact');
    
    // Click the button
    await userEvent.click(screen.getByRole('button', { name: /fetch new fact/i }));
    
    // Verify new fact is displayed
    await screen.findByText('New dog fact');
    
    // Verify fetch was called twice (initial + button click)
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://dog-api.kinduff.com/api/facts');
  });
});