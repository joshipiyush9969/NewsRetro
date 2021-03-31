import React from 'react';
import {View,StyleSheet,Text, Dimensions,Image} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewsCard = (props) =>{


    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity onPress ={props.onLink}>
                {props.isLink ? <EvilIcons name="external-link" size={30} color="#0099ff" />:null}
                </TouchableOpacity>

            </View>
            <View style={styles.creditContainer}>
                <View>
                    <Text style={styles.credit}>{props.author}</Text>
                    <Text style={styles.credit}>{props.source}</Text>
                </View>
                <View>
                    <Text style={styles.credit}>{new Date(props.publishedAt).toDateString()}</Text>
                </View>
            </View>
            {props.isImage?<View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:props.urlToImage}}/>
            </View>:null}
            <View style={styles.newsContainer}>
                <Text style={styles.news} numberOfLines={5}>{props.description}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        marginBottom:Dimensions.get('window').height*0.05,
        elevation:5,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'center'
    },
    title:{
        fontSize:25,
        fontWeight:'bold'
    },
    creditContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:Dimensions.get('window').height*0.01
    },
    credit:{
        color:'gray',
        fontSize:14,
        fontStyle:'italic'
    },
    news:{
        fontSize:18,
        letterSpacing:1
    },
    image:{
        height:Dimensions.get('window').height*0.23,
        borderRadius:7,
        marginVertical:Dimensions.get('window').height*0.01
    },
    titleContainerL:{
        flexDirection:'row',
        justifyContent:'center'
    }
});

export default NewsCard;