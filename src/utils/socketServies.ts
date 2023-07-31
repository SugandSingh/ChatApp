import { useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

const SOCKET_URL = 'http://10.0.2.2:1997';

interface WSService {
  initializeSocket: () => void;
  emit: (event: string, data?: any) => void;
  on: (event: string, cb: (...args: any[]) => void) => void;
  removeListener: (listenerName: string) => void;
}

const useWSService = (): WSService => {
  let socket: Socket;

  const initializeSocket = async () => {
    try {
      socket = io(SOCKET_URL, {
        transports: ['websocket']
      });
      console.log('initializing socket', socket);

      socket.on('connect', () => {
        console.log('=== socket connected ====');
      });

      socket.on('disconnect', () => {
        console.log('=== socket disconnected ====');
      });

      socket.on('error', (data: any) => {
        console.log('socket error', data);
      });
    } catch (error) {
      console.log('socket is not initialized', error);
    }
  };

  useEffect(() => {
    initializeSocket();

    return () => {
      socket.disconnect();
    };
  }, []);

  const emit = (event: string, data: any = {}) => {
    socket.emit(event, data);
  };

  const on = (event: string, cb: (...args: any[]) => void) => {
    socket.on(event, cb);
  };

  const removeListener = (listenerName: string) => {
    socket.removeListener(listenerName);
  };

  return {
    initializeSocket,
    emit,
    on,
    removeListener
  };
};

export default useWSService;
