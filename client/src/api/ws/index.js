import io from 'socket.io-client';

export const chatSocket = io('ws://localhost:3030/');
export const eventsSocket = io('ws://localhost:3030/events');