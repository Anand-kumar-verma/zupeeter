// SocketContext.js
import React, { createContext, useContext } from 'react';
import io from 'socket.io-client';
import { domain } from '../services/urls';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(domain); // Replace with your server URL

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return socket;
};
