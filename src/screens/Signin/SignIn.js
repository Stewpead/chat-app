import React from 'react'
import { View, Text } from 'react-native'
import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'
import { TouchableOpacity } from 'react-native-gesture-handler'

const App = () => {

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    
    return(
        <View>
            <TouchableOpacity onPress={signOut}>
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default withAuthenticator(App)