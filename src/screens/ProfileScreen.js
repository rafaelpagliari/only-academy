// src/screens/ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getProfiles, createProfile } from '../api';

const ProfileScreen = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const data = await getProfiles();
      setProfiles(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateProfile = async () => {
    const newProfile = {
      first_name: 'John',
      last_name: 'Doe',
      bio: 'This is my bio',
      location: 'New York',
      birthdate: new Date().toISOString(),
      profile_picture: 'http://example.com/profile.jpg',
      cover_photo: 'http://example.com/cover.jpg',
    };
    try {
      await createProfile(newProfile);
      fetchProfiles(); // Re-fetch profiles after creating a new one
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profiles</Text>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.first_name} {item.last_name}</Text>
            <Text>{item.bio}</Text>
          </View>
        )}
      />
      <Button title="Create Profile" onPress={handleCreateProfile} />
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

export default ProfileScreen;

