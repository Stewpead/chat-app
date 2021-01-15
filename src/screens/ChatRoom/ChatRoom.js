import React from 'react'
import { View, Text } from 'react-native'

import ChatMessage from './ChatMessage'

function ChatRoom () {

    const dummy = useRef()
    const [ text, setText ] = useState('');
  
    const sendMessage = async(e) => {
      e.preventDefault()
      const { uid, photoURL } = auth.currentUser
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
      setFormValue('')
      dummy.current.scrollIntoView({ behavior: 'smooth'})
    }
  
    return(
      <>
        <Text>Chat Room</Text>
        {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg} />)}
        <View ref={dummy}></View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <TextInput style={{ height: 40, borderColor: 'gray', width: '80%', borderWidth: 1, paddingLeft: 10}}
                onChangeText={text => setText(text)}
                value={text}
            />
            <TouchableOpacity>
                {/* <SendIcon /> */} 
                <Text style={{ marginTop: 10, paddingLeft: 10}}>
                    Send
                </Text>
            </TouchableOpacity>

        </View>
      </>
    )
  }

export default ChatRoom