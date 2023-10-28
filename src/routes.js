
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'

import { Feather } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator>

            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => {
                        return <Feather name="home" size={size} color={color}/>  
                    }
                }}
            />

            <Tab.Screen
                name="passwords"
                component={Passwords}
                options={{
                    tabBarShowIcon: false,
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => {
                        return <Feather name="lock" size={size} color={color}/>  
                    }
                }}
            />

        </Tab.Navigator>
    )
}