import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo similar al de la imagen
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#D1D5DB',
    tintColor: '#646ae7',
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
    shadowOpacity: 0.1,
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
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22, // Mismo tamaño que los campos
    fontWeight: '600',  // Mantiene el formato uniforme
    marginBottom: 5,
    color: '#333', // Color consistente
    alignSelf: 'flex-start', // Alinea el subtítulo a la izquierda
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
    alignSelf: 'flex-start', // Alinea el subtítulo a la izquierda
    fontSize: 22,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1F2937',
  },
  editIconContainer: {
    position: 'absolute',
    right: -40, // El ícono se posiciona fuera del cuadro
    top: '50%',
    transform: [{ translateY: -7 }], // Centra el ícono verticalmente
  },
});

export default styles