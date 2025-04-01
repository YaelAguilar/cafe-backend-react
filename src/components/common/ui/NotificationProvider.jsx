import React, { useState, useCallback } from 'react';
import Notification from './Notification';
import NotificationContext from './NotificationContext';

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback((message, type = 'info', duration = 5000) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type, duration }]);
    return id;
  }, []);

  const closeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const value = {
    showNotification,
    closeNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="notification-container">
        {notifications.map(({ id, message, type, duration }) => (
          <Notification
            key={id}
            message={message}
            type={type}
            duration={duration}
            onClose={() => closeNotification(id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;