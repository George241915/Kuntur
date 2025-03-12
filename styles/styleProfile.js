import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo similar al de la imagen
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  avatarContainer: {
    flexDirection: 'row', // Asegúrate de que el contenido esté en fila
    alignItems: 'center', // Alinea verticalmente al centro
    justifyContent: 'flex-start', // Alinea todo a la izquierda
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    //alignItems: 'center',
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    flexDirection: 'row',
    // justifyContent: 'flex-start', // Alinea todo a la izquierda
    marginBottom: 50, // Margen inferior si lo necesitas
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#D1D5DB',
    tintColor: '#646ae7',
    alignItems: 'center',
  },
  namePrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1F2937',
  },
  emailSecond: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  cardD: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 15,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 10,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para el modal
  },
  modalContainer: {
    width: '45%',
    height: '95%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    alignSelf: 'flex-start',
  },
  nameContainer: {
    justifyContent: 'flex-start', // Alineamos los elementos en el centro horizontalmente
    alignItems: 'center',  // Centra verticalmente los elementos (ícono, texto, etc.)
    borderColor: '#ccc',
    padding: 5,
    marginBottom: -5,
    fontSize: 22,
    marginTop: 10,
    color: '#1F2937',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 0,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: '#f9f9f9',
    fontWeight: '500',
    marginTop: 10,
    color: '#1F2937',
  },
  editIconContainer: {
    position: 'absolute',
    right: -30, // El ícono se posiciona fuera del cuadro
    top: '50%',
    transform: [{ translateY: 5 }], // Centra el ícono verticalmente
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonCancel: {
    backgroundColor: '#646ae7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
    opacity: 0.5,
    marginBottom: 15,
  },
  buttonSave: {
    backgroundColor: '#646ae7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  iconStyle : {
    fontSize: 20,       // Tamaño del icono
    color: '#646ae7',   // Color del icono
    paddingLeft: 10,    // Padding para separación
    marginRight: 10,    // Espacio entre el icono y el texto
  },
});

export default styles