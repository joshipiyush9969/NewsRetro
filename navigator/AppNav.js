import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//screens
import EverythingScreen from '../source/screens/EverythingScreen';
import ChannelScreen from '../source/screens/ChannelScreen';
import TopHeadlinesScreen from '../source/screens/TopHeadlinesScreen';
import SettingsScreen from '../source/screens/SettingsScreen';

//icons
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LiveTvScreen from '../source/screens/LiveTvScreen';

const defaultNavOptions = {
    headerStyle:{
        backgroundColor:'#800000'
    },
    headerTintColor:'white'
}


const EverythingNavigator = createStackNavigator({
    Everything:{screen:EverythingScreen}
},{defaultNavigationOptions:defaultNavOptions})

const TopHeadlinesNavigator = createStackNavigator({
    TopHeadlines:{screen:TopHeadlinesScreen}
},{defaultNavigationOptions:defaultNavOptions})

const SettingsNav = createStackNavigator({
    Settings:{screen:SettingsScreen}
},{defaultNavigationOptions:defaultNavOptions})

const Channel = createStackNavigator({
    Channel:{screen:ChannelScreen},
    Live:{screen:LiveTvScreen}
})

const tabScreenConfig = {
    News:{
        screen:EverythingNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return(<FontAwesome name="newspaper-o" size={24} color={tabInfo.tintColor} />);
            },
            tabBarLabel:'Daily News',
            tabBarColor:'#800000'
        }
    },
    TopNews:{
        screen:TopHeadlinesNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return(<MaterialCommunityIcons name="alert-box-outline" size={24} color={tabInfo.tintColor} />)
            },
            tabBarLabel:'Top News',
            tabBarColor:'#333333'
            
        }
    }
}
const MainNavigator = createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor:'white',
    shifting:true
})


const DrawerNavigator = createDrawerNavigator({
    News:MainNavigator,
    Settings:SettingsNav,
    Channels:Channel

})


export default createAppContainer(DrawerNavigator);