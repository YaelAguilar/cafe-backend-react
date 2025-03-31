import { useState, useEffect, useCallback } from 'react';
import { userService } from '../services/api';

export function useProfile(userType) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const service = userType === 'producer' ? userService.getProducerProfile : userService.getMerchantProfile;
      const response = await service();
      
      if (response.success) {
        setProfile(response.profile);
      } else {
        setError(response.message || 'Error al cargar el perfil');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al cargar el perfil');
    } finally {
      setLoading(false);
    }
  }, [userType]);

  const updateProfile = useCallback(async (data) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const service = userType === 'producer' ? userService.updateProducerProfile : userService.updateMerchantProfile;
      const response = await service(data);
      
      if (response.success) {
        setSuccess(true);
        await fetchProfile();
        return { success: true };
      } else {
        setError(response.message || 'Error al actualizar el perfil');
        return { success: false, error: response.message || 'Error al actualizar el perfil' };
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al actualizar el perfil');
      return { success: false, error: err.response?.data?.message || err.message || 'Error al actualizar el perfil' };
    } finally {
      setLoading(false);
    }
  }, [userType, fetchProfile]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profile, loading, error, success, fetchProfile, updateProfile };
}

export default useProfile;