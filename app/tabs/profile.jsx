import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking, Modal, TextInput } from 'react-native';
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
    name: 'Usuario Desconocido',
    email: 'correo@ejemplo.com',
    phone: '0000000000',
    address: 'No especificado',
    city: 'No especificado',
  };

  // Estado para manejar la visibilidad del Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const [editingName, setEditingName] = useState(false); // Estado para editar el nombre
  const [newName, setNewName] = useState(userData.name); // Estado para el nuevo nombre
  const [editingPhone, setEditingPhone] = useState(false); // Estado para editar el teléfono
  const [newPhone, setNewPhone] = useState(userData.phone); // Estado para el nuevo teléfono
  const [editingAddress, setEditingAddress] = useState(false); // Estado para editar la dirección
  const [newAddress, setNewAddress] = useState(userData.address); // Estado para la nueva dirección

  // Copia de los datos originales antes de la edición
  const [originalData, setOriginalData] = useState({
    name: userData.name,
    phone: userData.phone,
    address: userData.address,
  });

  // Función para mostrar el modal
  const handleEditProfile = () => {
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Función para manejar la edición del nombre
  const handleEditName = () => {
    setEditingName(true);
  };

  // Función para guardar el nombre editado
  const handleSaveName = () => {
    setEditingName(false);

  };

  // Función para manejar la edición del teléfono
  const handleEditPhone = () => {
    setEditingPhone(true);
  };

  // Función para guardar el teléfono editado
  const handleSavePhone = () => {
    setEditingPhone(false);
  };

  // Función para manejar la edición de la dirección
  const handleEditAddress = () => {
    setEditingAddress(true);
  };

  // Función para guardar la dirección editada
  const handleSaveAddress = () => {
    setEditingAddress(false);
  };

  // Función para manejar la entrada del número de teléfono
  const handlePhoneChange = (text) => {
    // Asegura que solo se ingresen números y que no superen los 10 caracteres
    if (/^\d{0,10}$/.test(text)) {
      setNewPhone(text);
    }
  };
  // Función para guardar cambios
  const handleSaveChanges = () => {
    // Actualizamos los valores de los campos si hay cambios
    userData.name = newName;
    userData.phone = newPhone;
    userData.address = newAddress;

    // Cerrar el modal después de guardar
    setModalVisible(false);
  };

  // Función para cancelar cambios
  const handleCancelChanges = () => {
    setEditingName(false); // Esto asegura que el ícono de edición vuelva
    setEditingPhone(false); // Lo mismo para los otros campos
    setEditingAddress(false);
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
              <Text style={styles.namePrincipal}>{userData.name}</Text>
              <Text style={styles.emailSecond}>{userData.email}</Text>

              <TouchableOpacity onPress={handleEditProfile}>
                <Text style={{ color: '#646ae7'}}>
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
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Botón de cerrar */}
            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={{ fontSize: 30 }}>×</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Editar Perfil</Text>

            <Text style={styles.subtitle}>Nombre:</Text>
            <View style={styles.nameContainer}>
              {editingName ? (
                <TextInput
                  style={styles.input}
                  value={newName}
                  onChangeText={setNewName}
                  onSubmitEditing={handleSaveName}
                />
              ) : (
                <>
                  <Text style={styles.namePrincipal}>{newName}</Text>
                  <TouchableOpacity onPress={handleEditName} style={styles.editIconContainer}>
                    <Icon name="edit" size={20} color="#3F7DF2" />
                  </TouchableOpacity>
                </>
              )}
            </View>
            <Text style={styles.subtitle}>Correo:</Text>
            <Text style={styles.nameContainer} editable={false}>{userData.email}</Text>  {/* No editable */}

            <Text style={styles.subtitle}>Teléfono:</Text>
            <View style={styles.nameContainer}>
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
                    <Icon name="edit" size={20} color="#3F7DF2" />
                  </TouchableOpacity>
                </>
              )}
            </View>

            <Text style={styles.subtitle}>Dirección:</Text>
            <View style={styles.nameContainer}>
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
                    <Icon name="edit" size={20} color="#3F7DF2" />
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
      </Modal>
    </View>
  );
}

