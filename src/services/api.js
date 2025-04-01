import axios from 'axios';

const API_URL = "http://localhost:2010/api";

// Configuración de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token a las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Servicios para usuarios
export const userService = {
  // Perfil de comerciante
  getMerchantProfile: async () => {
    const response = await api.get('/merchants/profile');
    return response.data;
  },
  
  updateMerchantProfile: async (data) => {
    const response = await api.put('/merchants/profile', data);
    return response.data;
  },
  
  updateMerchantSupplyNeeds: async (data) => {
    const response = await api.put('/merchants/supply-needs', data);
    return response.data;
  },
  
  // Perfil de productor
  getProducerProfile: async () => {
    const response = await api.get('/producers/profile');
    return response.data;
  },
  
  getProducerById: async (id) => {
    const response = await api.get(`/producers/${id}`);
    return response.data;
  },
  
  updateProducerProfile: async (data) => {
    const response = await api.put('/producers/profile', data);
    return response.data;
  },
  
  getProducerPhotos: async (producerId) => {
    const response = await api.get(`/producers/photos?producerId=${producerId}`);
    return response.data;
  },
  
  uploadProducerPhotos: async (formData) => {
    const response = await api.post('/producers/upload-photos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  // Listados
  getProducersList: async () => {
    const response = await api.get('/producers/list');
    return response.data;
  },
  
  getMerchantsList: async () => {
    const response = await api.get('/merchants/list');
    return response.data;
  },
  
  // Imágenes
  uploadProducerProfileImage: async (formData) => {
    const response = await api.post('/producers/upload-profile-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  uploadProfileImage: async (formData) => {
    const response = await api.post('/merchants/upload-profile-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  getMerchantById: async (id) => {
    const response = await api.get(`/merchants/${id}`);
    return response.data;
  },
  
  // Solicitudes de contacto
  createContactRequest: async (receiverId) => {
    const response = await api.post('/contact-requests', { receiverId });
    return response.data;
  },
  
  updateContactRequestStatus: async (requestId, status) => {
    const response = await api.put(`/contact-requests/${requestId}`, { status });
    return response.data;
  },
  
  getSentRequests: async () => {
    const response = await api.get('/contact-requests/sent');
    return response.data;
  },
  
  getReceivedRequests: async () => {
    const response = await api.get('/contact-requests/received');
    return response.data;
  },
  
  getConnections: async () => {
    const response = await api.get('/contact-requests/connections');
    return response.data;
  },
  
  checkContactRequestStatus: async (targetId) => {
    const response = await api.get(`/contact-requests/check/${targetId}`);
    return response.data;
  }
};

export default api;