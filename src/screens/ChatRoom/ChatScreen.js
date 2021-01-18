import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { withAuthenticator } from 'aws-amplify-react-native'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { onCreateCreateChatApp } from '../../graphql/subscriptions';
import { listCreateChatApps } from '../../graphql/queries';
import ChatRoom from './ChatRoom'

// import SendIcon from '@material-ui/icons/Send';

const ChatScreen = () => {

    const [ messages, setMessages ] = useState([])
    const [ newMsg, setNewMsg ] = useState([])
    const [ currentUser, setCurrentUser ] = useState('')
    const [ subscription, setSubscription ] = useState('')

    const getAllMessage = () => {

        try {
            const res = await API.graphql(graphqlOperation(listCreateChatApps))
            console.log('response', res.data.listCreateChatApps.items)
            setMessages(res.data.listCreateChatApps.items)
        } catch ( error ) {   
            console.log('Error: ', error)
        }
        setSubscription(API.graphql(graphqlOperation(onCreateCreateChatApp))
        .subscribe({next: chatData => {
            console.log("CHAT DATA", chatData.value.data.onCreateCreateChatApp)
            setNewMsg(chatData.value.data.onCreateCreateChatApp)
            setMessages([...messages, newMsg])
        }}))

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
            <View style={styles.headerPart}>
                <TouchableOpacity onPress={signOut}>
                    <Text style={{color: '#fff'}}>Sign out</Text>
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

const styles = StyleSheet.create({
    headerPart: {
        backgroundColor: '#181717',
        height: 20,
        minHeight: 15,
        width: '100%',
        top: 0,
        display: 'flex',
        alignItems: 'center'
    }
})
