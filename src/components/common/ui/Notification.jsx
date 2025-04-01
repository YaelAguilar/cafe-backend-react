import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Notification = ({ 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose 
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'error':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'info':
      default:
        return 'bg-blue-50 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-md border ${getTypeStyles()} transition-all duration-300 transform`}>
      <div className="flex items-start">
        <div className="flex-1">
          <p className="font-medium">{message}</p>
        </div>
        <button 
          onClick={handleClose}
          className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Notification;