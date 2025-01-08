import '@testing-library/jest-dom';
import { vi, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock fetch globally
global.fetch = vi.fn();

// Cleanup after each test
afterEach(() => {
  cleanup();
});