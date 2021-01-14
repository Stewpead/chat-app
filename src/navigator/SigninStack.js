import { createStackNavigator } from 'react-navigation-stack'
import SignIn from '../screens/Signin/SignIn'

const screens = {
    SigninScreen: {
        screen: SignIn
    }
}

const SigninStack = createStackNavigator(screens, {
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

export default SigninStack