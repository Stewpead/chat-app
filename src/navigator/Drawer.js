import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import SigninStack from './SigninStack'

const RootDrawerNavigator = createDrawerNavigator({
    SignIn: {
        screen: SigninStack
    }
})

export default createAppContainer(RootDrawerNavigator)
