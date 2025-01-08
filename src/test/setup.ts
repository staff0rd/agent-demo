import '@testing-library/jest-dom';
import { vi, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock fetch globally
global.fetch = vi.fn();

// Cleanup after each test
afterEach(() => {
  cleanup();
});