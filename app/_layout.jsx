import { Stack } from "expo-router";
import { AuthProvider } from '@/contexts/AuthContext';


const RootLayout = () => {
  return ( 
    <AuthProvider>
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ff8c00'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      contentStyle: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#fff'
      },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name='index' options={{ headerShown: false }}/>
    <Stack.Screen name='auth' options={{ headerShown: false }}/>
    <Stack.Screen name='tabs' options={{ headerShown: false }}/>
  </Stack>
  </AuthProvider>);
};

export default RootLayout;