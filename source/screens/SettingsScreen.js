import React from 'react';
import { useState } from 'react';
import {View,Text,TextInput,StyleSheet, SafeAreaView, Dimensions, Button} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { MaterialIcons } from '@expo/vector-icons'; 
const SettingsScreen = (props) => {

    const[lang,setLang] = useState(lang);
    const[count,setCount] = useState(count);
    const[sort,setSort] = useState(sort);

    const onCountEvent = (item)=>{
        if(item){
            props.navigation.navigate({routeName:'TopHeadlines', params:{
                country : item
            }})
        }
        else{
            props.navigation.navigate({routeName:'TopHeadlines', params:{
                country : 'in'
            }})
        }
    }

    const onEvent = (item) => {
        if(item){
            props.navigation.navigate({routeName:'Everything', params:{
                language : item
            }})
        }
        else{
            props.navigation.navigate({routeName:'Everything', params:{
                language : 'en'
            }})
        }

        console.log(item)
    }

return(
<SafeAreaView>

    <View style={styles.langContainer}>
        <View style={styles.textcontainer}>
            <Text style={styles.text}>For Daily News:</Text>
        </View>
        <View style={styles.Container}>
        <DropDownPicker
            items={[
                {label: 'English', value: 'en', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'Spanish', value: 'es', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'Italian', value: 'it', icon: () => <Icon name="flag" size={18} color="#900" />}
            ]}
            defaultValue={lang}
            placeholder="Select Language"
            containerStyle={{height: Dimensions.get('window').height*0.06, width:'50%'}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => {setLang(item.value);}}
            
        />
       
       <MaterialIcons name="done" size={30} color="black"  onPress={()=>onEvent(lang)}/>
        </View>
    </View>

    <View style={styles.langContainer}>
        <View style={styles.textcontainer}>
            <Text style={styles.text}>For Top Headlines:</Text>
        </View>
        <View style={styles.Container}>
        <DropDownPicker
            items={[
                {label: 'India', value: 'in', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'United States', value: 'us', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'Italian', value: 'it', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'Russia', value: 'ru', icon: () => <Icon name="flag" size={18} color="#900" />}
            ]}
            defaultValue={count}
            placeholder="Select Country"
            containerStyle={{height: Dimensions.get('window').height*0.06, width:'50%'}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => {setCount(item.value);}}
            
        />
       
       <MaterialIcons name="done" size={30} color="black"  onPress={()=>onCountEvent(count)}/>
        </View>
    </View>
</SafeAreaView>
    )
}

const styles= StyleSheet.create({
    text:{
        fontSize:18
    },
    langContainer:{
        padding:10,
        justifyContent:'center'
    },
    Container:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textcontainer:{
        padding:10
    }
});


export default SettingsScreen;