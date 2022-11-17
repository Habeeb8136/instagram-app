import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.home}><Image style={{height:"100%", resizeMode:"contain",width:35}} source={require('../assets/homeicon.png')}></Image></View>
            <View style={styles.search}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/searchicon.png')}></Image></View>
            <View style={styles.reels}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/reelicon.png')}></Image></View>
            <View style={styles.like}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/likeicon.png')}></Image></View>
            <View style={styles.profile}><Image style={{height:"100%", resizeMode:"contain",width:30}} source={require('../assets/profileIcon.png')}></Image></View>
        </View>
    );
}

const styles = StyleSheet.create({
footerContainer:{
    
    flexDirection:"row",
    justifyContent:"space-evenly",
    top:"153%",
    backgroundColor:"rgb(240,240,240)",
    bottom:"0%",
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
