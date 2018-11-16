import {createStackNavigator} from 'react-navigation'

import ForgotPassView from './ForgotPassView'

import InitialStacks from '../index'

export default RootInitial = createStackNavigator(
    {
    Init: InitialStacks,
    Forgot: ForgotPassView
    },
    {
        mode:'modal',
        headerMode:'none'
    }
)