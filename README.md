# insta-story-fetcher

Anonymously retrieve simulated Instagram story details and metadata utilizing web emulator flows.

## Features

- Simulates stories and highlights queries.
- Retrieves media timelines cleanly.
- Frictionless configuration.

## Installation

```bash
npm install insta-story-fetcher
```

## Usage

```typescript
import { fetchStories } from 'insta-story-fetcher';

// Query public stories
const stories = await fetchStories('cristiano');
console.log(`Found ${stories.length} stories:`, stories);
// Output: ['https://instagram.com/p/mock1.jpg', ...]
```

## API Reference

### fetchStories(username)

Queries public story list for a given user profile.

**Parameters:**
- `username`: `string`

**Returns:** `Promise<string[]>`

## License

MIT
