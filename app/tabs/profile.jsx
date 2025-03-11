import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAuth } from '@/contexts/AuthContext';

/** Componente que dibuja un círculo de progreso con dos semicírculos */
function CircleProgress({
  progress = 0.45,       // 0 a 1 (por ejemplo, 0.45 = 45%)
  size = 100,           // tamaño total del círculo
  strokeWidth = 5,      // grosor del anillo
  backgroundColor = '#ddd', 
  progressColor = '#4CAF50',
  imageSource,          // fuente de la imagen (uri o require)
}) {
  // Convertimos el progreso en grados (0 a 360)
  const degrees = progress * 360;
  
  const rightHalfDegrees = Math.min(degrees, 180);       // lo que rota la mitad derecha
  const leftHalfDegrees = degrees > 180 ? degrees - 180 : 0; // si pasa de 180, usamos el sobrante en la mitad izquierda

  const radius = size / 2;

  return (
    <View style={[stylesCP.container, { width: size, height: size }]}>
      {/* Círculo de fondo */}
      <View
        style={[
          stylesCP.backgroundCircle,
          {
            width: size,
            height: size,
            borderRadius: radius,
            borderWidth: strokeWidth,
            borderColor: backgroundColor,
          },
        ]}
      />

      {/* Mitad derecha (semicírculo) */}
      <View style={[stylesCP.halfCircleContainer, { width: size, height: size }]}>
        <View
          style={[
            stylesCP.halfCircle,
            {
              width: size,
              height: size,
              borderRadius: radius,
              borderWidth: strokeWidth,
              borderColor: progressColor,
              transform: [{ rotateZ: `${rightHalfDegrees}deg` }],
            },
          ]}
        />
      </View>

      {/* Mitad izquierda (se muestra sólo si progress > 0.5) */}
      {leftHalfDegrees > 0 && (
        <View
          style={[
            stylesCP.halfCircleContainer,
            {
              width: size,
              height: size,
              // rotamos todo el contenedor 180°, y dentro rotamos la "porción" sobrante
              transform: [{ rotateZ: '180deg' }],
            },
          ]}
        >
          <View
            style={[
              stylesCP.halfCircle,
              {
                width: size,
                height: size,
                borderRadius: radius,
                borderWidth: strokeWidth,
                borderColor: progressColor,
                transform: [{ rotateZ: `${leftHalfDegrees}deg` }],
              },
            ]}
          />
        </View>
      )}

      {/* Imagen en el centro */}
      <View style={[stylesCP.centerContent, { width: size, height: size }]}>
        <Image
          source={imageSource}
          style={{
            width: size - strokeWidth * 2,
            height: size - strokeWidth * 2,
            borderRadius: (size - strokeWidth * 2) / 2,
          }}
        />
      </View>
    </View>
  );
}

export default function HomeUser() {
  const { user } = useAuth();

  // Datos del usuario (o valores por defecto)
  const userData = user || {
    avatar: null,
    name: 'Usuario Desconocido',
    age: 29,
  };

  // El porcentaje (0 a 1). Para 45% => 0.45
  const profileCompletion = 0.45;

  // Imagen de usuario: si existe userData.avatar, usarla; sino, la local
  const imageSource = userData.avatar
    ? { uri: userData.avatar }
    : require('@/assets/images/user.png');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header: Título + ícono de engranaje */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil usuario</Text>
        <TouchableOpacity onPress={() => console.log('Ajustes')}>
          <Icon name="cog" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Fila con el círculo de progreso a la izquierda y la info a la derecha */}
      <View style={styles.profileRow}>
        <CircleProgress
          progress={profileCompletion}
          size={100}
          strokeWidth={6}
          backgroundColor="#ddd"
          progressColor="#4CAF50"
          imageSource={imageSource}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.userName}>
            {userData.name}, {userData.age}
          </Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => console.log('Editar perfil')}
          >
            <Text style={styles.editButtonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ejemplo de tarjeta de verificación */}
      <View style={styles.verificationCard}>
        <Text style={styles.verificationTitle}>Verificación</Text>
        <Text style={styles.verificationText}>
          Verificación añade una capa extra de autenticidad y protege tu perfil.
          ¡Verifica tu cuenta ahora!
        </Text>
      </View>      
    </SafeAreaView>
  );
}

/* Estilos del círculo de progreso */
const stylesCP = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundCircle: {
    position: 'absolute',
  },
  halfCircleContainer: {
    position: 'absolute',
  },

  halfCircle: {
    position: 'absolute',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },

  centerContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* Estilos generales */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#007bff',
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  verificationCard: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  verificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  verificationText: {
    fontSize: 14,
    color: '#333',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
