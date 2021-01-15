import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { withAuthenticator } from 'aws-amplify-react-native'
import { API, Auth, graphqlOperation, Hub } from 'aws-amplify'

import ChatRoom from './ChatRoom'

import { listChatApps } from '../../graphql/queries';
import { createChatApp } from '../../graphql/mutations';

// import SendIcon from '@material-ui/icons/Send';

const ChatScreen = () => {
    
    const [ messages, setMessages ] = useState([])

      async function sendMsg() {

        let input = {
            "text": "Test 3",
            "createdAt": 1610523985,
            "photoURL": "WTF"
        }

        try {
            await API.graphql(graphqlOperation(createChatApp, { input }))
        } catch (error) {
            console.log("send message error: ", error)
        }

      }

      async function getAllMessage() {
        try {
            const res = await API.graphql(graphqlOperation(listChatApps))
            setMessages(res.data.listChatApps.items)
        } catch( error) {   
            console.log('Error: ', error)
        }
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
    })

    return (
        <View style={{justifyContent: 'center'}}>
            <TouchableOpacity onPress={signOut}>
                <Text>Sign out</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={sendMsg}>
                <Text>Test Send</Text>
            </TouchableOpacity>
            <ChatRoom /> */}
        </View>
    )
}

export default withAuthenticator(ChatScreen)