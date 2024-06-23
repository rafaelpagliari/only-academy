// src/screens/PostScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getPosts, createPost } from '../api';

const PostScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreatePost = async () => {
    const newPost = {
      user_id: '00000000-0000-0000-0000-000000000000', // Use um UUID válido aqui
      post_type: 'text',
      content: 'This is a new post',
      number: '12345',
      image_url: 'http://example.com/image.jpg',
      video_url: 'http://example.com/video.mp4',
      likes: '0',
      shares: '0',
    };
    try {
      await createPost(newPost);
      fetchPosts(); // Re-fetch posts after creating a new one
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.content}</Text>
          </View>
        )}
      />
      <Button title="Create Post" onPress={handleCreatePost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
  },
});

export default PostScreen;

