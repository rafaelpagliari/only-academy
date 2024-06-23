// src/screens/Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Ver Perfil"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button
        title="Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment')}
      />
      <Button
        title="Profiles"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <Button
        title="Posts"
        onPress={() => navigation.navigate('PostScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;

