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

            <TouchableOpacity onPress={handleEditProfile}>
              <Text style={{ color: '#3F7DF2', padding: 10 }}>
                Editar perfil
              </Text>
            </TouchableOpacity>

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

            {/* Título Nombre */}
            <Text style={styles.subtitle}>Nombre:</Text>

            {/* Nombre editable con borde y lápiz */}
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
          </View>
        </View>
      </Modal>          
    </View>
  );
}

