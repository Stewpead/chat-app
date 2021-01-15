import React,{ useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'
import { createChatApp } from '../../graphql/mutations';

import ChatMessage from './ChatMessage'

function ChatRoom (props) {
    const [ text, setText ] = useState('');
    // const [ timeFormat, setTimeFormat ] = useState('')
    let { messages, currentUser } = props
    const dummy = useRef()

    async function sendMsg() {

        var today = new Date().getTime();
        let input = {
            "uid" : currentUser,
            "text": text,
            "createdAt": today,
            "photoURL": "n/a"
        }

        try {
            await API.graphql(graphqlOperation(createChatApp, { input }))
        } catch (error) {
            console.log("send message error: ", error)
        }
        setText('')
        dummy.current.scrollViewRef.scrollTo({ animated: true})
    }

    return(
      <>
        <Text>Chat Room</Text>
        {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg} currentUser={currentUser} />)}
        <ScrollView ref={dummy} />
        <View style={{justifyContent: 'center'}}>
            <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                <TextInput style={{ height: 40, borderColor: 'gray', width: '80%', borderWidth: 1, paddingLeft: 10}}
                    onChangeText={text => setText(text)}
                    value={text}
                />
                <TouchableOpacity onPress={sendMsg}>
                    <Text style={{ marginTop: 10, paddingLeft: 10}}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </>
    )
  }

export default ChatRoom