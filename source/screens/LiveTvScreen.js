import React from 'react';
import {View,StyleSheet,Text,SafeAreaView, Dimensions} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import NewsChannel from '../components/NewsChannel';

const LiveTvScreen = (props) => {

    const source = props.navigation.getParam('source_')
    const ytLink = props.navigation.getParam('ytLink_')

    return(<SafeAreaView style={{marginTop:Dimensions.get('window').height*0.05}}>
        <NewsChannel source={source} ytLink={ytLink}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

LiveTvScreen.navigationOptions = navData => {
    return{
        header:()=>{
            return false
        }
    }
}

export default LiveTvScreen;
//zee newsonly video but description aajtak,ndtv done,indiaTv video and indiatvnews.com for eenglish ,ddnews and indiatv.in for hindi des.