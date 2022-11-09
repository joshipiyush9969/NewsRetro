import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {View,StyleSheet,Text,SafeAreaView,FlatList, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//api
import NewsApi from '../api/NewsApi';

//components
import NewsCard from '../components/NewsCard';

const TopHeadlinesScreen = (props) => {

    const[news,setNews] = useState([]);
    const[isNews,setIsNews] = useState(true);

    const CountId = props.navigation.getParam('country','in');

    useEffect(()=>{
        newsResponse(CountId)
    },[CountId])

    const newsResponse = async(CountId)=>{
        try{
        const response = await NewsApi.get(`top-headlines?country=${CountId}&apiKey=YOUR_API_KEY`)
        console.log(response)
        setNews(response.data)
        setIsNews(true);
        }
        catch(err){
            console.log(err)
            setIsNews(false);
        }

    }
    const OpenUrl = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    if(!news){
        return(
            null 
        )
    }
    if(isNews){
        return(
            <SafeAreaView style={{flex:1,marginTop:15}}>
            <View style={{flex:1}}>
                <FlatList data={news.articles} keyExtractor={(item,index)=>'key'+index}
                renderItem={itemData => <NewsCard title={itemData.item.title} author={itemData.item.author} 
                                                   source={itemData.item.source.name} publishedAt={itemData.item.publishedAt}
                                                   urlToImage={itemData.item.urlToImage} description={itemData.item.description}
                                                   onLink={()=>OpenUrl(itemData.item.url)}
                                                   isLink={itemData.item.url}
                                                   isImage={itemData.item.urlToImage}/> }/>
                
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

TopHeadlinesScreen.navigationOptions = navData => {
    return{
        header:()=>{
            return false
        }
    }
}

export default TopHeadlinesScreen;
