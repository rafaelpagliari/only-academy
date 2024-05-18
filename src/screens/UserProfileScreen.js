import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.background}>
{/*plano de fundo do perfil*/}
        <Image
          source={require('../planodefundo.png')}
          style={styles.unsplashImage}
        />
{/*background perfil*/}
        <Image
          source={require('../background.png')}
          style={styles.backgroundImage}
        />
      </View>

      {/* Content */}
      <View style={styles.card}>
        <Image
          source={require('../fundofotos.png')}
          style={styles.baseImage}
        />
        <View style={styles.photos}>
          {/* Aqui você pode adicionar as imagens */}
        </View>
      </View>

      {/* Avatar */}
      <View style={styles.avatar}>
        <Image
          source={require('../imagem.png')}
          style={styles.avatarImage}
        />
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <View style={styles.frame}>
          <View style={styles.followers}>
            <Text style={styles.text}>1k</Text>
            <Text style={styles.text02}>Followers</Text>
          </View>
          <View style={styles.following}>
            <Text style={styles.text04}>342</Text>
            <Text style={styles.text06}>Following</Text>
          </View>
        </View>
        <Text style={styles.text08}>@RafaelPagliari</Text>
        <Text style={styles.text10}>Meu nome é Rafael e este é meu projeto</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.text12}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.text14}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {/* Aqui você pode adicionar as categorias */}
      </View>

      {/* Top Navigation */}
      <View style={styles.topNavigation}>
        <TouchableOpacity style={styles.allowLeft}>
          <View style={styles.arrowLeft}>
            {/* Ícone de voltar */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageIcon}>
          <View style={styles.message}>
            {/* Ícone de mensagem */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    width: 390,
    height: 842,
    position: 'relative',
  },
  unsplashImage: {
    width: 390,
    height: 240,
  },
  backgroundImage: {
    width: 390,
    height: 650,
    borderRadius: 50,
    position: 'absolute',
    top: 192,
    left: 0,
  },
  card: {
    width: 390,
    height: 398,
    position: 'absolute',
    top: 446,
    left: 0,
    alignItems: 'center',
  },
  baseImage: {
    width: 390,
    height: 398,
    borderRadius: 50,
  },
  photos: {
    flexDirection: 'row',
    marginTop: 11,
  },
  avatar: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 138,
    left: 145,
    alignItems: 'center',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    width: 291,
    position: 'absolute',
    top: 201,
    left: 50,
    alignItems: 'center',
  },
  frame: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  followers: {
    marginRight: 160,
    alignItems: 'center',
  },
  following: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text02: {
    marginBottom: 5,
  },
  text04: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text06: {
    marginBottom: 5,
  },
  text08: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text10: {
    color: '#6c7a9c',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  followButton: {
    marginRight: 20,
  },
  messageButton: {},
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  topNavigation: {
    flexDirection: 'row',
    position: 'absolute',
    top: 16,
    left: 16,
  },
  allowLeft: {
    marginRight: 270,
  },
  messageIcon: {},
});

export default UserProfileScreen;

