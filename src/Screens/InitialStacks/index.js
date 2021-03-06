import {createStackNavigator} from 'react-navigation'

// Stack Imports
import HomeView from './HomeView'
import RegisterView from './RegisterView'
import SignInView from './SignInView'

export default InitialStacks = createStackNavigator(
    {
        Home: HomeView,
        Register:RegisterView,
        SignIn:SignInView
    },
    {
        initialRouteName:'Home'
    }
)