import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/About'
import Header from '../shared/header'

const screens = {
    About:{
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                header: () => <Header 
                    navigation={navigation}
                    title='About GameZone'
                />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle: { 
            backgroundColor: '#eee', 
            height: 80
        }
    }
})

export default AboutStack