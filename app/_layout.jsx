import { Stack } from "expo-router";
import { AuthProvider } from '@/contexts/AuthContext';



const RootLayout = () => {
  return (
    <AuthProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold'
            },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='auth' options={{ headerShown: false }} />
          <Stack.Screen name='tabs' options={{ headerShown: false }} />
        </Stack>
    </AuthProvider>);
};



export default RootLayout;