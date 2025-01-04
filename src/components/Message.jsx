import React, { useState, useEffect } from 'react';
import { 
  useCreateChatClient, 
  Chat, 
  Channel, 
  ChannelHeader, 
  MessageInput, 
  MessageList, 
  Thread, 
  Window 
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

// other imports
import 'stream-chat-react/dist/css/v2/index.css';
//import '../layout.css';

// Your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'dark-thunder-7';
const userName = 'dark';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGFyay10aHVuZGVyLTciLCJleHAiOjE3MzYwNDM5MzF9.hUtPU_j0MKvKccgc0izKBIdIr38-qPsnhHJ8PVXAXPg';

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const Message = () => {
  const [channel, setChannel] = useState(null);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const newChannel = client.channel('messaging', 'custom_channel_id', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Talk about React',
      members: [userId],
    });

    setChannel(newChannel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      {channel && (
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      )}
    </Chat>
  );
};

export default Message;