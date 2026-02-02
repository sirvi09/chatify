import React from 'react'
import { useAuthStore } from '../store/userAuthStore.js';

function ChatPage() {
    const {authUser,isLoading, login } = useAuthStore()
  
  return (
    <div>
      ChatPage
    </div>
  )
}

export default ChatPage
