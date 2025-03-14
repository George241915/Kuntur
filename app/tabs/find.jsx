import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Find() {
   const [value, setValue] = React.useState('casa');

   const radioOptions = [
      { label: 'Casa', value: 'casa' },
      { label: 'Kuntur 1', value: 'kuntur1' },
      { label: 'Kuntur 2', value: 'kuntur2' },
   ];

   return (
      <View style={styles.container}>
         <Image
            source={require('../../assets/images/map.png')}
            style={styles.image}
         />
         <Text style={styles.title}>Seleccionar Ubicación</Text>
         <View style={styles.radioContainer}>
            <RadioButton.Group
               onValueChange={(newValue) => setValue(newValue)}
               value={value}
            >
               <View style={styles.radioRow}>
                  {radioOptions.map((option) => (
                     <View style={styles.radioOption} key={option.value}>
                        <RadioButton value={option.value} />
                        <Text style={styles.radioLabel}>{option.label}</Text>
                     </View>
                  ))}
               </View>
            </RadioButton.Group>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      paddingTop: 20,
   },
   image: {
      width: '80%',
      height: 250,
      borderRadius: 25,
      marginBottom: 10,
      marginTop: -50,
   },
   title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
   },
   radioContainer: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      marginTop: 10,
      alignSelf: 'center',
   },
   radioRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   radioOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
   },
   radioLabel: {
      fontSize: 16,
      marginLeft: 5,
   },
});
