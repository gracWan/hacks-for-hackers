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
//import './layout.css';

// Your Stream app information
const apiKey = 'cyaw4h7bya7e';
const userId = 'grace';
const userName = 'grace';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ3JhY2UifQ.iST__vuUjbnraFvRoGjV1DncZKmXNsoEkPVc191Pw2w';

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
      name: 'Bob',
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
