import { account } from './appwrite';
import { ID } from 'react-native-appwrite';

const authService = {
  // Register a user
  async register(email, password, name) {
    try {
      const response = await account.create(ID.unique(), email, password, name);
      return response;
    } catch (error) {
      return {
        error: error.message || 'Fallo el registro. Por favor intenta nuevamente',
      };
    }
  },
  // Login
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || 'Falló el inicio de sesión. Por favor verifica tus credenciales',
      };
    }
  },
  // Get logged in user
  async getUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },


  // Logout user
  async logout() {
    try {
      await account.deleteSession('current');
    } catch (error) {
      return {
        error: error.message || 'Fallo el cierre de sesión. Por favor intentalo nuevamente',
      };
    }
  },
};

export default authService;