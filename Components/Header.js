import React from 'react';
import {View, StyleSheet, Text ,Image, PermissionsAndroid,TouchableHighlight,TouchableOpacity} from 'react-native';
import wordmark from '../assets/Instagram-Wordmark-Black-Logo.wine.svg'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            
            <View style={styles.logo}><Image style={styles.iglogo} source={require('../assets/Instagram-Wordmark-Logo.wine.png')}></Image></View>
            <View style={styles.cam}><Image style={styles.camLogo} source={require('../assets/igLogoIcon.wine.png')}></Image></View>
            <View style={styles.dms}><View style={styles.notiBadgeContainer}><Text style={styles.notiBadge}>7</Text></View><Image style={styles.dmsLogo} source={require('../assets/dms.png')}></Image></View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        height:50,
        width:"100%",
        position:"absolute",
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
       
    },

    notiBadgeContainer:{
        backgroundColor:'red',
        position:'absolute',
        zIndex:1,
        left:15,
        top:-2,
        paddingHorizontal:5,
        borderRadius:12
        
        
    },
    notiBadge:{
        
        fontSize:10,
        color:"white",
        
    }
   

})

export default Header;
