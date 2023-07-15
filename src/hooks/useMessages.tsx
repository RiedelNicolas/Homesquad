/* eslint-disable */

import { useEffect, useState } from 'react'
import {ref, push, set, onValue } from 'firebase/database';

import { database } from '../firebaseConfig';

export type MessageType = {
  id: string;
  rol: rol;
  message: string;
  isOffer: boolean;
};

type rol = 'client' | 'profesional';

export const useMessages = (rol: rol) => {

  const [messages, setMessages] = useState([] as MessageType[]);

  useEffect(() => {
    try{
      const messageRef = ref(database, 'messages');
      onValue(messageRef, (snapshot) => {
        const data = snapshot.val() as Record<string, MessageType> | null;
        if (data) {
          const newMessages = Object.values(data);
          setMessages(newMessages);
        } else {
          setMessages([]);
        }
      });
    }catch(error){
      console.log(error);
    }
  }, [])

  const sendMessage = (message: string, isOffer : boolean) => {
    try{
      const messageRef = ref(database, 'messages');
      const newPostRef = push(messageRef);
      const randomId = Math.random().toString(36).slice(2, 7);
  
      const newMessage = {
        id: randomId,
        rol,
        message,
        isOffer
      }
      set(newPostRef, newMessage);
    }catch(error){
      console.log(error);
    }
  }

  const clearAllMessages = () => {
    try{
      const messageRef = ref(database, 'messages');
    set(messageRef, null);
    } catch(error){
      console.log(error);
    }
  }

  return{
    sendMessage,
    messages,
    clearAllMessages
  }

}
