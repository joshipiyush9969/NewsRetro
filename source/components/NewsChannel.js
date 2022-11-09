import React from 'react';
import { useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image, SafeAreaView,Linking,FlatList, Dimensions} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons'; 

//api
import NewsApi from '../api/NewsApi';

//component
import NewsCard from './NewsCard';
import HorizontalCard from './HorizontalCard';
import { useState } from 'react';

const NewsChannel = (props) => {
    const[isNews,setIsNews] = useState(true);
    const[news,setNews] = useState([]);

    useEffect(()=>{
        
        newsResponse(props.source)
    },[])

    const dateFormater = () => {
        const date = new Date()
        const month = date.getMonth()+1;
        const day = date.getDate()-1
        const year = date.getFullYear()
        const currentDate = year+'-'+month+'-'+day;
        console.log(currentDate);
        
        return currentDate
    }

    const newsResponse = async(source)=>{
        try{       
        const date = dateFormater()
        const response = await NewsApi.get(`everything?domains=${source}&sortBy=publishedAt&apiKey=YOUR_API_KEY`)
        console.log(response)
        setIsNews(true);

        setNews(response.data)
        }
        catch(err){
            console.log(err)
            console.log('oof');
            setIsNews(false);
        }

    }

    const OpenUrl = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    if(isNews){
        return(
        <SafeAreaView style={{backgroundColor:'white'}}>
        <View style={{borderWidth:1}}>
            <YoutubePlayer height={Dimensions.get('window').height*0.3} videoId={props.ytLink}/>
        </View>
         <View>
         <FlatList data={news.articles} horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item,index)=>'key'+index}
            renderItem={itemData => <HorizontalCard title={itemData.item.title} author={itemData.item.author} 
                                               source={itemData.item.source.name} publishedAt={itemData.item.publishedAt}
                                               urlToImage={itemData.item.urlToImage} description={itemData.item.description}
                                               onLink={()=>OpenUrl(itemData.item.url)}
                                               isLink={itemData.item.url}
                                               isImage={itemData.item.urlToImage}/>}/>
        </View>
        
    </SafeAreaView>
        )
    }
    else{
        return(
            <View style={styles.centre}>
                <Text>Request Exceeded</Text>
                <Text>Only 100 request(News Request) possible per day</Text>
                <Ionicons name="ios-sad" size={50} color="black" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centre:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
});

export default NewsChannel;
