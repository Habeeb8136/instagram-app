import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Footer = ({navigation}) => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.home} onTouchEnd={()=>navigation.navigate('Home')}><Image style={{height:"100%", resizeMode:"contain",width:35}} source={require('../assets/homeicon.png')}></Image></View>
            <View style={styles.search} onTouchEnd={()=>navigation.navigate('Search')}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/searchicon.png')}></Image></View>
            <View style={styles.reels}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/reelicon.png')}></Image></View>
            <View style={styles.like}  onTouchEnd={()=>navigation.navigate('Notifications')}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/likeicon.png')}></Image></View>
            <View style={styles.profile} onTouchEnd={()=>navigation.navigate('my profile')}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/profileIcon.png')}></Image></View>
        </View>
    );
}

const styles = StyleSheet.create({
footerContainer:{
    zIndex:3,
    width:"100%",
    backgroundColor:'white',
    flexDirection:"row",
    justifyContent:"space-evenly",
    bottom:0, 
    
    position:'absolute'
    
    
},
home:{
    
    height:45,
    right:20
    
},
search:{
    
    height:45,
    right:11
},
reels:{
    
    height:45
},
like:{
    
    height:45,
    left:12
},
profile:{
    
    height:45,
    left:21
}


})

export default Footer;
