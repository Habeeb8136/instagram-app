import React from 'react';
import {View, StyleSheet, Text ,Image, PermissionsAndroid} from 'react-native';
import wordmark from '../assets/Instagram-Wordmark-Black-Logo.wine.svg'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.cam}><Image style={styles.camLogo} source={require('../assets/igLogoIcon.wine.png')}></Image></View>
            <View style={styles.logo}><Image style={styles.iglogo} source={require('../assets/Instagram-Wordmark-Logo.wine.png')}></Image></View>
            <View style={styles.dms}><Image style={styles.dmsLogo} source={require('../assets/dms.png')}></Image></View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        height:"8%",
        position:"relative",
        marginTop:"6.5%",
        backgroundColor:"rgb(240,240,240)",
        display:"flex"
        
        
    },
    logo:{
        bottom:"55%",
        left:"30%",
        height:"70%"
    },
    iglogo:{
        height:'90%',
        width:"40%",
        
        
        
    },
    cam:{
        width:"10%",
        left:"1%",
        marginTop:"2%", 
        height:"70%"
    },
    
    camLogo:{
        height:'100%',
        width:"100%",  
    },
    dms:{
       left:"88%",
       
       top:"-130%"
    },
    dmsLogo:{
        height:"75%",
        width:"11%",
        resizeMode:"contain"
       
    }
   

})

export default Header;
