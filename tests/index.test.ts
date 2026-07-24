import { describe, it, expect } from 'vitest';
import { fetchStories } from '../src/index.js';

describe('insta-story-fetcher', () => {
  it('should return simulated URLs for targeted user', async () => {
    const urls = await fetchStories('test_user');
    expect(urls[0]).toContain('test_user');
  });
});