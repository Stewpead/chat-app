import React,{ useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'
import { createCreateChatApp } from '../../graphql/mutations';

import ChatMessage from './ChatMessage'

function ChatRoom (props) {
    const [ text, setText ] = useState('');
    // const [ timeFormat, setTimeFormat ] = useState('')
    const [ trysort, SetTrysort ] = useState('')

    let { messages, currentUser } = props

    useEffect( () => {
        console.log('messages on chatroom: ', messages)
        // trySort()
    })

    // const trySort = () => {
        // SetTrysort(messages.sort((a, b) => ( a.createdAt > b.createdAt) ? 1 : -1))
    // }

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
            await API.graphql(graphqlOperation(createCreateChatApp, { input }))
        } catch (error) {
            console.log("send message error: ", error)
        }
        setText('')
        // dummy.current.scrollViewRef.scrollTo({ animated: true})
    }

    return(
      <View style={{display: 'flex'}}>
        <Text>Chat Room</Text>
        <ScrollView style={{marginHorizontal: 20, height: '80%'}}>
            {messages && messages.map( msg => 
            <ChatMessage key={msg.id} 
            message={msg} 
            currentUser={currentUser}
            />)}
        </ScrollView>
        {/* <ScrollView ref={dummy} /> */}
        <View style={{justifyContent: 'center'}}>
            <View style={styles.formView}>
                <TextInput style={styles.inputStyle}
                    onChangeText={text => setText(text)}
                    value={text}
                />
                <TouchableOpacity onPress={sendMsg}>
                    <Text style={{ marginTop: 9, paddingLeft: 10, color: '#fff'}}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }

export default ChatRoom
const styles = StyleSheet.create({
    formView: {
        height: 40,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#696969',
        width: '100%',
        display: 'flex',
        fontSize: 14,
        flexDirection: 'row'
    },
    inputStyle: {
        width: '80%',
        backgroundColor: '#1e90ff',
        color: '#fff'
    }
})
