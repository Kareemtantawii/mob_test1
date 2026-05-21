// api.js - API integration for fetching external data
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch a list of posts (example API)
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Fetch a single post by ID
export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
};

// Fetch a random quote (alternative API)
export const fetchRandomQuote = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      quote: data.content,
      author: data.author,
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return { quote: 'Stay positive!', author: 'Unknown' };
  }
};

// Fetch list of meditation exercises (mock API - replace with real endpoint)
export const fetchMeditations = async () => {
  try {
    // This would be your actual API endpoint for meditation data
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6');
    const data = await response.json();
    return data.map((item, index) => ({
      id: item.id,
      title: `Meditation ${index + 1}`,
      description: item.title,
      image: item.thumbnailUrl,
      duration: `${(index + 5)} min`,
      tag: index % 2 === 0 ? 'Calmness' : 'Relaxation',
    }));
  } catch (error) {
    console.error('Error fetching meditations:', error);
    return [];
  }
};
