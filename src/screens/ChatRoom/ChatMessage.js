import React from 'react'
import { View, Text} from 'react-native'

function ChatMessage( props ) {
    const [ currentUser, setCurrentuser ] = useState('')
    const { text, uid, photoURL } = props.message;

    const messageClass = uid 
    // === auth.currentUser.uid ? 'sent': 'received';
    return (
      <View className={`message ${messageClass}`}>
        <Text style={{color: '#000'}}>{text}</Text>
      </View>
    )
}
export default ChatMessage