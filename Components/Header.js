import React from 'react';
import {View, StyleSheet, Text ,Image, PermissionsAndroid} from 'react-native';
import wordmark from '../assets/Instagram-Wordmark-Black-Logo.wine.svg'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            
            <View style={styles.logo}><Image style={styles.iglogo} source={require('../assets/Instagram-Wordmark-Logo.wine.png')}></Image></View>
            <View style={styles.cam}><Image style={styles.camLogo} source={require('../assets/igLogoIcon.wine.png')}></Image></View>
            <View style={styles.dms}><Image style={styles.dmsLogo} source={require('../assets/dms.png')}></Image></View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        height:50,
        position:"relative",
        marginTop:"6.5%",
        display:"flex",
        shadowColor: 'grey', 
        
        backgroundColor:"rgb(255,255,255)",
        elevation: 8,  
        
    },
    logo:{
        top:7,
        left:15,
        height:"70%",
        
    },
    iglogo:{
        height:'100%',
        width:120,
        
        
        
    },
    cam:{
        width:"10%",
        
        marginTop:"2%", 
        height:"70%",
        bottom:26,
        left:275
    },
    
    camLogo:{
        height:20,
        width:20,  
    },
    
    dms:{
       left:320,
       bottom:67
    },
    dmsLogo:{
        height:30,
        width:30,
        
        resizeMode:"contain"
       
    }
   

})

export default Header;
