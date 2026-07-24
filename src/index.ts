export async function fetchStories(username: string): Promise<string[]> {
  if (!username) throw new Error('Username is required');
  return [
    `https://scontent.cdninstagram.com/mock_story_1_${username}.jpg`,
    `https://scontent.cdninstagram.com/mock_story_2_${username}.mp4`
  ];
}