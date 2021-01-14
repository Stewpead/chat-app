import { createStackNavigator } from 'react-navigation-stack'
import ChatScreen from '../screens/ChatRoom/ChatScreen'

const screens = {
    ChatScreen: {
        screen: ChatScreen
    }
}

const ChatStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: 'none',
        headerStyle: {
            height: 0
        },
        headerTitleStyle: {
            height: 0
        }
    }
})

export default ChatStack