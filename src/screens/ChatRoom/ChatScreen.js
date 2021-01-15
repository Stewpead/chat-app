import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { withAuthenticator } from 'aws-amplify-react-native'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { onCreateChatApp } from '../../graphql/subscriptions';

import ChatRoom from './ChatRoom'

import { listChatApps } from '../../graphql/queries';


// import SendIcon from '@material-ui/icons/Send';

const ChatScreen = () => {

    const [ messages, setMessages ] = useState([])
    const [ newMsg, setNewMsg ] = useState([])
    const [ currentUser, setCurrentUser ] = useState('')
    const [ subscription, setSubscription ] = useState('')

    async function getAllMessage() {

        try {
            const res = await API.graphql(graphqlOperation(listChatApps))
            setMessages(res.data.listChatApps.items)

            setSubscription(API.graphql(graphqlOperation(onCreateChatApp))
            .subscribe({next: chatData => {
                
                if( chatData.value.data.onCreateChatApp != null) {
                    setNewMsg(chatData.value.data.onCreateChatApp)
                    const prevMsg = messages.filter( chat => chat.id !== newMsg.id)
                    setMessages(prevMsg, ...newMsg)
                }

                console.log("CHAT DATA: ", newMsg)
            }}))
           
        } catch ( error ) {   
            console.log('Error: ', error)
        }

    }

    async function getUser() {

        Auth.currentAuthenticatedUser()
        .then(user => setCurrentUser(user.username))
        .catch(() => console.log("user: null"));

    }

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    useEffect( () => {
        getAllMessage()
        getUser()
    },[])

    useEffect(()=>{
        return () => subscription.unsubscribe
    },[subscription])

    return (
        <View style={{justifyContent: 'center'}}>
            <View style={{}}>
                <TouchableOpacity onPress={signOut}>
                    <Text>Sign out</Text>
                </TouchableOpacity>
            </View>
            <ChatRoom 
                messages={messages} 
                currentUser={currentUser}
            />
        </View>
    )
}

export default withAuthenticator(ChatScreen)
// const [subscription, setSubscription]

// const getAllMessage = async () => {
// ...
// setMessage(...items)
// setSubscription(Api.graphql(tung subscribe).subscribe(next:setMessage(message, ...data)
// }

// useEffect( () => {
//     return ()=>subscription.unsubscribe}[subscription]
//     }
// )