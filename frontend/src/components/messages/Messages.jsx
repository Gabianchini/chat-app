import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {
  const {messages, loading} = useGetMessages();
  useListenMessages();
  console.log("messages:",messages);

  return (
    <div className=' border px-4 flex-1 overflow-auto bg-neutral-800 rounded-md'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
        {loading &&  [... Array(3)].map((_,idx) => <MessageSkeleton key={idx} /> )}
        {!loading &&  messages.length === 0 && (
          <p className='text-center p-2 text-white'>Send a message to start the conversation</p>
        )}
    </div>
  )
}

export default Messages