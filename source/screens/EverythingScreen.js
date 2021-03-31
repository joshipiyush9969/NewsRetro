import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View,StyleSheet,Text, SafeAreaView,FlatList,Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

//loader
import HashLoader from '@bit/davidhu2000.react-spinners.hash-loader'
//api
import NewsApi from '../api/NewsApi';

//components
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';

const EverythingScreen = props => {

    const LangId = props.navigation.getParam('language','en');
    console.log(LangId)


    const[news,setNews] = useState([]);
    const[term,setTerm] = useState('');
    const[isNews,setIsNews] = useState(true);
    
    const dateFormater = () => {
        const date = new Date()
        const month = date.getMonth()+1;
        const day = date.getDate()-1
        const year = date.getFullYear()
        const currentDate = year+'-'+month+'-'+day;
        console.log(currentDate);
        
        return currentDate
    }
    
    useEffect(()=>{
        
        newsResponse('india',LangId)
    },[LangId])


    const newsResponse = async(term,LangId)=>{
        try{       
        if(!term){
            term='india'
            LangId = props.navigation.getParam('language','en');
        }
        const date = dateFormater()
        const response = await NewsApi.get(`everything?q=${term}&language=${LangId}&from=${date}&sortBy=publishedAt&apiKey=7f3b12055f094388b4569740411d34a4`)
        console.log(response)
        setIsNews(true);

        setNews(response.data)
        }
        catch(err){
            console.log(err)
            console.log('heheheheheheheeheh');
            setIsNews(false);
        }

    }
    const OpenUrl = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }


    if(news.totalResults==0){
        return (
            <View>
            <View>
            <SearchBar term={term}
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={()=>newsResponse(term)}/>
        </View>
        <View style={styles.centre}><Text style={{fontSize:18}}>No news about <Text style={{fontWeight:'bold'}}>{term}</Text></Text></View>
                
            </View>
        )
    }
    if(isNews){

    return(
        <SafeAreaView style={{flex:1}}>
        <View>
            <SearchBar term={term}
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={()=>newsResponse(term,LangId)}/>
        </View>
        <View style={{flex:1}}>
            <FlatList data={news.articles} keyExtractor={(item,index)=>'key'+index}
            renderItem={itemData => <NewsCard title={itemData.item.title} author={itemData.item.author} 
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
            <Text>An Error Occured</Text>
            <FontAwesome5 name="newspaper" size={30} color="black" />
        </View>
    )
}
}


const styles = StyleSheet.create({
    centre:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        padding:10
    }
});

EverythingScreen.navigationOptions = navData => {
    return{
        header:()=>{
            return false
        }
    }
}

export default EverythingScreen;