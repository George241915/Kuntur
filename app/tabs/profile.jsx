import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import styles from '@/styles/styleProfile.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAuth } from '@/contexts/AuthContext';

const facebook = <Icon name="facebook" size={50} />;
const instagram = <Icon name="instagram" size={50} />;
const linkedin = <Icon name="linkedin" size={50} />;

export default function HomeUser() {
  const { user } = useAuth(); // Obtener el usuario autenticado desde el contexto

  // Datos del usuario autenticado o valores por defecto
  const userData = user || {
    avatar: '@/assets/images/user.png',
    name: 'Usuario Desconocido',
    email: 'correo@ejemplo.com',
    phone: '0000000000',
    address: 'No especificado',
    city: 'No especificado',
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.card}>
          <View style={styles.avatarContainer}>
            <Image
              source={
                userData.avatar
                  ? { uri: userData.avatar }
                  : require('@/assets/images/user.png')
              }
              style={styles.avatar}
            />
            <Text style={styles.namePrincipal}>{userData.name}</Text>
            <Text style={styles.emailSecond}>{userData.email}</Text>
            <View style={styles.buttonContainer}>
              <Text style={{ color: '#3F7DF2', padding: 10 }} onPress={() => Linking.openURL('https://www.facebook.com')}>
                {facebook}
              </Text>
              <Text style={{ color: '#E1306C' , padding: 10}} onPress={() => Linking.openURL('https://www.instagram.com')}>
                {instagram}
              </Text>
              <Text style={{ color: '#0e76a8' ,padding: 10}} onPress={() => Linking.openURL('https://www.linkedin.com')}>
                {linkedin}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.cardD}>
          <Text style={{ paddingTop: 5 }}>Teléfono</Text>
          <Text style={styles.name}>{userData.phone}</Text>
        </View>
      </View>
    </View>
  );
}