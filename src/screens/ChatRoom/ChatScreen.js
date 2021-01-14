import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'

const ChatScreen = () => {

    function ChatRoom () {

        const dummy = useRef()
        const messageRef = firestore.collection('messages')
        const query = messageRef.orderBy('createdAt').limit(25)
        const [messages] = useCollectionData(query, {idField: 'id'})
        const [ formValue, setFormValue ] = useState('');
      
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
            <h1>Chat Room</h1>
            {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg} />)}
            <div ref={dummy}></div>
            <form onSubmit={sendMessage}>
              <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
              <button type="submit">Send</button>
            </form>
          </>
        )
      }

      function ChatMessage( props ) {
        const { text, uid, photoURL } = props.message;
        const messageClass = uid === auth.currentUser.uid ? 'sent': 'received';
      
        return (
          <div className={`message ${messageClass}`}>
            <img src={photoURL} height={30} width={30}/>
            <p style={{color: '#fff'}}>{text}</p>
          </div>
        )
      }
      
      async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={signOut}>
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default withAuthenticator(ChatScreen)