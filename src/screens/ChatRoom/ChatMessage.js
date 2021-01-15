import React, { useState } from 'react'
import { View, Text } from 'react-native'

function ChatMessage( props ) {
    const { text, uid, currentUser } = props.message;
    const messageClass = uid === currentUser ? 'sent' : 'received'
    
    return (
      <View className={`message ${messageClass}`}>
        <Text style={{color: '#000'}}>{text}</Text>
      </View>
    )
}
export default ChatMessage