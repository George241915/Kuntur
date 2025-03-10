import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react"

import Principal from '@/assets/images/main.png';

export default function alarm() {

  // Estado para controlar el cambio de color
  const [tinted, setTinted] = useState(true);

  // Función para cambiar el tintColor de la imagen
  const handlePress = () => {
    setTinted(!tinted);  // Alterna entre los dos colores
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
       onPress={handlePress}
      >
        <Image source={Principal}
         style={[styles.image,{ tintColor: tinted ? '#646ae7' : '#b92232' }]}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    left: 12,
    bottom: 40,

  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',    
  },
});