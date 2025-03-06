import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native'
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
    <TouchableOpacity onPress={handleLogout}>
      <FontAwesome5 name="sign-out-alt" size={20} color={'#0123E1'}></FontAwesome5>
    </TouchableOpacity>
  ) : null;
};

export default function TabLayout() {
  return (
    <AuthProvider>
      <Tabs screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerRight: () => <HeaderLogout />,
      }}>
        <Tabs.Screen name="index" options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }} />
        <Tabs.Screen name="record" options={{
          title: 'Grabaciones',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="film" color={color} />,
        }} />
        <Tabs.Screen name="alarm" options={{
          title: 'Activar Alarma',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bullhorn" color={color} />,
        }} />
        <Tabs.Screen name="find" options={{
          title: 'Encontrar Drone',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="map-marked-alt" color={color} />,
        }} />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}
