
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation'


import Find from '../components/find'
import Video from '../components/video'
import Mys from '../components/mys'
import Friend from '../components/friend'
import Course from '../components/course'

export let tabNav = createBottomTabNavigator(
    {
        Find:{
            screen:Find,
        },
        Video:{
            screen:Video,
        },
        Mys:{
            screen:Mys,
        },
        Friend:{
            screen:Friend,
        },
        Course:{
            screen:Course,
        }
    },{
        tabBarOptions:{
            activeTintColor:'#e84f35'
        }
    }
)