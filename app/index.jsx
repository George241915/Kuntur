import { useState, useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import ImgBg from '@/assets/images/GuardianEye_Background.png';

export default function Index() {
  const { user, loading } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); // 2 segundos

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, []);

  if (loading || !isReady) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={ImgBg}
          resizeMode="cover"  // Ajusta la imagen para que cubra toda la pantalla
          style={styles.image}
        >
          <Text style={styles.text}>GuardianEye</Text>
        </ImageBackground>
      </View>
    );
  }

  return user ? <Redirect href="/tabs" /> : <Redirect href="/auth" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '110%',   // Asegura que la imagen ocupe el 100% del ancho de la pantalla
    height: '110%',  // Asegura que la imagen ocupe el 100% del alto de la pantalla
    justifyContent: 'center',  // Asegura que los elementos dentro estén centrados
    alignItems: 'center',      // Centra el texto
  },
  text: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',   // Esto asegura que el texto se mantenga centrado
  },
});

