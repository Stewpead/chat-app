import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ChatMessage( props ) {
    const { text, uid, currentUser } = props.message;
    const messageClass = uid === currentUser ? 'sent' : 'received'
    
    if (messageClass === 'sent') { 
        return (
            <View style={styles.sentStyle}>
                <Text style={{color: '#fff', backgroundColor: '#483d8b', borderRadius: 30, padding: 10}}>{text}</Text>
            </View>
        ) 
    } else {
        return (
            <View style={styles.receiveStyle}>
                <Text style={{color: '#fff', backgroundColor: '#1e90ff', borderRadius: 30, padding: 10}}>{text}</Text>
            </View>
        )
    }
}
export default ChatMessage

const styles = StyleSheet.create({
    sentStyle: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    receiveStyle: {
        flexDirection: 'row-reverse'
    }
})