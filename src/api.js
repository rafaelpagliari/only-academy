import axios from 'axios';

const SUPABASE_URL = 'https://cmanvxqkdhhfdhwyjiqv.supabase.co/rest/v1';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtYW52eHFrZGhoZmRod3lqaXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxNjI4MzMsImV4cCI6MjAzNDczODgzM30.6XK-p1nwENWx-kypxUVv5fCDQMilEBNTsRIlXhVqi9M';
const api = axios.create({
  baseURL: SUPABASE_URL,
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const getProfiles = async () => {
  try {
    const response = await api.get('/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }
};

export const createProfile = async (profile) => {
  try {
    const response = await api.post('/profile', profile);
    return response.data;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await api.post('/posts', post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export default api;
