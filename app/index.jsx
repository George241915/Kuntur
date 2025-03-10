import { useState, useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { View, Text, Image, StyleSheet } from 'react-native';

import ImgBg from '@/assets/images/kn.png';

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
        <View style={styles.container}>
          <Image
            source={ImgBg}
            style={styles.image}
          >
          </Image>
          <Text style={styles.text}>Kuntur</Text>
        </View>

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
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    justifyContent: 'center',  // Asegura que los elementos dentro estén centrados
    alignItems: 'center',      // Centra el texto
    tintColor: '#646ae7',
    height: 100,
    width: 200,
    resizeMode: 'cover',
    paddingBottom: 0,
  },
  text: {
    color: '#646ae7',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

