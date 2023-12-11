import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get('/api/data');
      setChats(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};
export default Chatpage;
