import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import ChatStack from './ChatScreenStack'

const RootDrawerNavigator = createDrawerNavigator({
    Chat: {
        screen: ChatStack
    }
})

export default createAppContainer(RootDrawerNavigator)
