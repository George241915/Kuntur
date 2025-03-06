import { Text, View, StyleSheet, Image } from "react-native";
import KunturImage from '@/assets/images/coffeeSplash.png'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={KunturImage} style = {styles.image} />
      <Text style = {styles.title}>Welcome to Kuntur</Text>
      <Text style = {styles.subtitle}>!Kuntur?</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#999',
  },
  subtitle:{
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  }
})
