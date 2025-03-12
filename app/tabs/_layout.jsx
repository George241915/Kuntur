import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import { TouchableOpacity, View, StyleSheet} from 'react-native'
import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';

const HeaderLogout = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout(); // Realizamos el logout
    router.replace("/auth/login"); // Redirigimos al login
  };

  return user ? (
    <TouchableOpacity onPress={handleLogout} style={{ right: 15 }}>
      <FontAwesome5 name="sign-out-alt" size={22} color={'#646ae7'}></FontAwesome5>
    </TouchableOpacity>
  ) : null;
};

export default function TabLayout() {
  const { user } = useAuth();
  const router = useRouter();
  const [redirected, setRedirected] = useState(false); // Estado para controlar la redirección

  useEffect(() => {
    // Solo redirige si el usuario está autenticado y aún no se ha realizado la redirección
    if (user && !redirected) {
      setRedirected(true); // Marca que la redirección ya ocurrió
      router.replace("/tabs/alarm"); // Redirige a la pestaña 'alarm'
    }
  }, [user, redirected, router]); // Ejecutar cuando el estado 'user' cambie
  return (
    <AuthProvider>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#4F46E5',
        headerStyle: {
          backgroundColor: '#FFFFFF', // Fondo blanco
          height: 100, // Ajusta la altura del header
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 20, // Ajusta la posición vertical
          left: 20,   // Ajusta la posición horizontal
          right: 20,
          borderRadius: 25, // Esquinas redondeadas
          backgroundColor: '#f1f2f4', // Fondo de la TabBar
          elevation: 5, // Sombra en Android
          shadowColor: '#000', // Sombra en iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        tabBarShowLabel: false, // Oculta los nombres de las pestañas
        headerTitleStyle: {
          fontSize: 36, // Tamaño del título
          fontFamily: 'Inter-Bold',
          fontWeight: 'bold', // Negrita
          color: '#000', // Color negro
        },
        headerLeft: () => (
          <View
            style={{
              width: 6,
              height: '60%',
              backgroundColor: '#646ae7', // Barra lateral azul
              position: 'absolute',
              left: 0,
              top: '20%',
              borderRadius: 2,
            }}
          />
        ),
        headerTitleAlign: 'left', // Alinea el título a la izquierda
        headerRight: () => <HeaderLogout />,
        
      }} initialRouteName='alarm'>
        <Tabs.Screen name="index" options={{
          title: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.selectedIcon : styles.iconContainer}>
              <AntDesign
                size={24}
                name="home"
                color={focused ? 'white' : 'gray'} // Cambia el color del ícono
              />
            </View>
          )
        }} />
        <Tabs.Screen name="record" options={{
          title: 'Grabaciones',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.selectedIcon : styles.iconContainer}>
              <MaterialCommunityIcons
                size={24}
                name="record-circle-outline"
                color={focused ? 'white' : 'gray'} // Cambia el color del ícono
              />
            </View>
          ),
        }} />
        <Tabs.Screen name="alarm" options={{
          title: 'Activar Alarma',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.selectedIcon : styles.iconContainer}>
              <FontAwesome
                size={24}
                name="bullhorn"
                color={focused ? 'white' : 'gray'} // Cambia el color del ícono
              />
            </View>
          ),
        }} />
        <Tabs.Screen name="find" options={{
          title: 'Encontrar Kuntur',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.selectedIcon : styles.iconContainer}>
              <FontAwesome6
                size={24}
                name="map-location-dot"
                color={focused ? 'white' : 'gray'} // Cambia el color del ícono
              />
            </View>
          ),
        }} />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil Usuario',
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.selectedIcon : styles.iconContainer}>
                <FontAwesome5
                  size={24}
                  name="user"
                  color={focused ? 'white' : 'gray'} // Cambia el color del ícono
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
iconContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 60,
  height: 60,
},
selectedIcon: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 47,
  height: 48,
  borderRadius: 20, // Círculo
  backgroundColor: '#646ae7', // Color de resaltado
},
});
