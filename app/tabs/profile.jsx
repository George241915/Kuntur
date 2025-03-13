import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking, Modal, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
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
    name: 'Desconocido',
    email: 'correo@ejemplo.com',
    phone: '0000000000',
    address: 'No especificado',
    city: 'No especificado',
    age: '0',
  };

  // Estado para manejar la visibilidad del Modal
  const [isModalVisible, setModalVisible] = useState(false);

  const [editingPhone, setEditingPhone] = useState(false); // Estado para editar el teléfono
  const [newPhone, setNewPhone] = useState(userData.phone); // Estado para el nuevo teléfono
  const [editingAddress, setEditingAddress] = useState(false); // Estado para editar la dirección
  const [newAddress, setNewAddress] = useState(userData.address); // Estado para la nueva dirección
  const [editingAge, setEditingAge] = useState(false); // Estado para editar la edad
  const [newAge, setNewAge] = useState(userData.age); // Estado para la nueva edad

  // Copia de los datos originales antes de la edición
  const [originalData, setOriginalData] = useState({
    phone: userData.phone,
    address: userData.address,
    age: userData.age,
  });

  // Función para mostrar el modal y cerrar 
  const handleEditProfile = () => { setModalVisible(true); };
  const handleCloseModal = () => { setModalVisible(false); };

  // Función para manejar la edición y guardar los campos
  const handleEditPhone = () => { setEditingPhone(true); };
  const handleSavePhone = () => { setEditingPhone(false); };

  const handleEditAddress = () => { setEditingAddress(true); };
  const handleSaveAddress = () => { setEditingAddress(false); };

  const handleEditAge = () => { setEditingAge(true); };
  const handleSaveAge = () => { setEditingAge(false); };

  // Función para manejar la entrada del número de teléfono
  const handlePhoneChange = (text) => {
    if (/^\d{0,10}$/.test(text)) {
      setNewPhone(text);
    }
  };

  const handleAgeChange = (text) => {
    if (/^\d{0,2}$/.test(text)) {
      setNewAge(text);
    }
  };

  // Duardar cambios
  const handleSaveChanges = () => {
    userData.phone = newPhone;
    userData.address = newAddress;
    userData.age = newAge;
    setModalVisible(false);
  };

  // Función para cancelar cambios
  const handleCancelChanges = () => {
    setEditingPhone(false);
    setEditingAddress(false);
    setEditingAge(false);
    setModalVisible(false); // Cierra el modal
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
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.namePrincipal}>
                {userData.name}, {newAge} años
              </Text>
              <Text style={styles.emailSecond}>{userData.email}</Text>

              <TouchableOpacity onPress={handleEditProfile}>
                <Text style={{ color: '#646ae7' }}>
                  Editar perfil
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={{ color: '#3F7DF2', padding: 25 }} onPress={() => Linking.openURL('https://www.facebook.com')}>
          {facebook}
        </Text>
        <Text style={{ color: '#E1306C', padding: 25 }} onPress={() => Linking.openURL('https://www.instagram.com')}>
          {instagram}
        </Text>
        <Text style={{ color: '#0e76a8', padding: 25 }} onPress={() => Linking.openURL('https://www.linkedin.com')}>
          {linkedin}
        </Text>
      </View>

      {/* Modal para editar perfil */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">

          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              {/* Botón de cerrar */}
              <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                <Text style={{ fontSize: 40, marginTop: -20, marginRight: -4 }}>×</Text>
              </TouchableOpacity>

              <Text style={styles.modalTitle}>Editar Perfil</Text>

              <View style={styles.avatarContainer}>
                <Image
                  source={
                    userData.avatar
                      ? { uri: userData.avatar }
                      : require('@/assets/images/user.png')
                  }
                  style={styles.avatar}
                />
              </View>

              <Text style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center', // Centra el contenido horizontalmente
                marginBottom: 15, // Reducción del margen inferior
                paddingVertical: 5, // Reducción del padding vertical
                fontSize: 25, // Tamaño de texto más pequeño
                color: '#1F2937',
                fontWeight: '500',
              }}>{userData.name}</Text>
              <Text style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center', // Centra el contenido horizontalmente
                fontSize: 18, // Tamaño de texto más pequeño
                color: '#1F2937',
                marginTop: -12, // Reducción del padding vertical
              }}>{userData.email}</Text>


              <View style={styles.nameContainer}>
                <Text style={styles.subtitle}>
                  <Icon name="birthday-cake" style={styles.iconStyle} />
                  Edad:</Text>
                {editingAge ? (
                  <TextInput
                    style={styles.input}
                    value={newAge}
                    onChangeText={handleAgeChange}
                    onSubmitEditing={handleSaveAge}
                    placeholder="Ingrese su edad"
                    keyboardType="numeric"
                  />
                ) : (
                  <>
                    <Text style={styles.input}>{newAge} años</Text>
                    <TouchableOpacity onPress={handleEditAge} style={styles.editIconContainer}>
                      <Icon name="edit" size={20} color="#646ae7" />
                    </TouchableOpacity>
                  </>
                )}
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.subtitle}>
                  <Icon name="phone" style={styles.iconStyle} />
                  Teléfono:</Text>


                {editingPhone ? (
                  <TextInput
                    style={styles.input}
                    value={newPhone}
                    onChangeText={handlePhoneChange}
                    onSubmitEditing={handleSavePhone}
                    placeholder="Ingrese su teléfono"
                    keyboardType="numeric"
                    maxLength={10}
                  />
                ) : (
                  <>
                    <Text style={styles.input}>{newPhone}</Text>
                    <TouchableOpacity onPress={handleEditPhone} style={styles.editIconContainer}>
                      <Icon name="edit" size={20} color="#646ae7" />
                    </TouchableOpacity>
                  </>
                )}
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.subtitle}>
                  <Icon name="map-marker-alt" style={styles.iconStyle} />
                  Dirección:</Text>
                {editingAddress ? (
                  <TextInput
                    style={styles.input}
                    value={newAddress}
                    onChangeText={setNewAddress}
                    onSubmitEditing={handleSaveAddress}
                  />
                ) : (
                  <>
                    <Text style={styles.input}>{newAddress}</Text>
                    <TouchableOpacity onPress={handleEditAddress} style={styles.editIconContainer}>
                      <Icon name="edit" size={20} color="#646ae7" />
                    </TouchableOpacity>
                  </>
                )}
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleCancelChanges} style={styles.buttonCancel}>
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSaveChanges} style={styles.buttonSave}>
                  <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

