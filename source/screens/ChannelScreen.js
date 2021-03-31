import React from 'react';
import {View,StyleSheet,Text,SafeAreaView, Dimensions,Image, Button} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import NewsChannel from '../components/NewsChannel';
import AwesomeButton from "react-native-really-awesome-button";
import { MaterialIcons } from '@expo/vector-icons'; 

const ChannelScreen = (props) => {
    return(
        <View style={styles.centre}>
            <View style={{flexDirection:'row'}}>
            <MaterialIcons name="live-tv" size={65} color="black" />
            <Text style={{fontWeight:'bold'}}>Live TV</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AwesomeButton type="primary" borderRadius={10} 
                backgroundColor='#98231a' backgroundDarker='#5c140f' 
                width={Dimensions.get('window').width*0.5}
                onPress={()=>{props.navigation.navigate({routeName:'Live', params:{
                    source_ : 'ndtv.com' , ytLink_: 'MN8p-Vrn6G0'
                }})}}>
                    NDTV</AwesomeButton>

            </View>
            <View style={styles.buttonContainer}>
                <AwesomeButton type="primary" borderRadius={10} textColor='white'
                backgroundColor='#dc2326' backgroundDarker='#5c140f' //progress={true} progressLoadingTime={2000}
                width={Dimensions.get('window').width*0.5}
                onPress={()=>{props.navigation.navigate({routeName:'Live', params:{
                    source_ : 'abplive.com' , ytLink_: 'DZCElJyPfG0'
                }})}}>
                    ABP NEWS</AwesomeButton>
            </View>
            <View style={styles.buttonContainer}>
                <AwesomeButton type="primary" borderRadius={10} textColor='black'
                backgroundColor='#fdb201' backgroundDarker='#b35402' //progress={true} progressLoadingTime={2000}
                width={Dimensions.get('window').width*0.5}
                onPress={()=>{props.navigation.navigate({routeName:'Live', params:{
                    source_ : 'indiatv.in' , ytLink_: 'qvyTx01ZcQQ'
                }})}}>
                    INDIA TV</AwesomeButton>
            </View>
            <View style={styles.buttonContainer}>
                <AwesomeButton type="primary" borderRadius={10} textColor='white'
                backgroundColor='#332382' backgroundDarker='#1a1245' //progress={true} progressLoadingTime={2000}
                width={Dimensions.get('window').width*0.5}
                onPress={()=>{props.navigation.navigate({routeName:'Live', params:{
                    source_ : 'aajtak.in' , ytLink_: 'gExKeZDY_j8'
                }})}}>
                    DD NEWS</AwesomeButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centre:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonContainer:{
        marginVertical:Dimensions.get('window').height*0.05
    }
});

ChannelScreen.navigationOptions = navData => {
    return{
        header:()=>{
            return false
        }
    }
}

export default ChannelScreen;
