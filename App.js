// App.js
import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Importe corrigido
import SettingsScreen from './src/screens/SettingsScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import CameraScreen from './src/screens/CameraScreen';
import PaymentScreen from './src/screens/PaymentScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StripeProvider publishableKey="pk_live_51PLYydP7tSvpbCH4YtA40jUfmzRsnP25KfpKVX4Q4BJpWe99sN5KQMG7Ic8pStjk6A2kGKrY4WmaZAc6Ywnx7Uxn006kREtVxf">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} /> {/* Aqui a alteração foi desfeita */}
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
};

export default App;

