import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Camera, useCameraPermission, useCameraDevices } from 'react-native-vision-camera';

const CameraScreen = () => {
  const { hasPermission: cameraPermissionGranted, requestPermission: requestCameraPermission } = useCameraPermission();
  const { devices: cameraDevices } = useCameraDevices();

  useEffect(() => {
    handleRequestPermissions();
  }, []);

  const handleRequestPermissions = async () => {
    if (!cameraPermissionGranted) {
      const cameraPermissionResult = await requestCameraPermission();
      if (!cameraPermissionResult) {
        informUserAboutPermissions();
        return;
      }
    }
  };

  const informUserAboutPermissions = () => {
    Alert.alert(
      'Permissão de Câmera',
      'Para usar a câmera, permita o acesso à câmera nas configurações do seu dispositivo.',
      [{ text: 'OK' }],
      { cancelable: false }
    );
  };

  const informUserAboutCameraError = () => {
    Alert.alert(
      'Erro',
      'Não foi possível encontrar o dispositivo da câmera. Verifique suas configurações de câmera e permissões.',
      [{ text: 'OK' }],
      { cancelable: false }
    );
  };

  const informUserAboutTroubleshooting = () => {
    Alert.alert(
      'Solução de Problemas',
      'Se o problema persistir, tente reiniciar o aplicativo ou verificar as configurações de permissão da câmera em seu dispositivo.',
      [{ text: 'OK' }],
      { cancelable: false }
    );
  };

  if (!cameraDevices || cameraDevices.length === 0) {
    informUserAboutCameraError();
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Não foi possível encontrar o dispositivo da câmera.</Text>
      </View>
    );
  }

  const selectedDevice = cameraDevices.find(device => device.position === 'front');
  const cameraDevice = selectedDevice || cameraDevices[0]; // Fallback para o primeiro dispositivo encontrado

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={cameraDevice}
        isActive={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
  },
});

export default CameraScreen;

