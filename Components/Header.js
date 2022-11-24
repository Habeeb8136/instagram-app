import React from 'react';
import {View, StyleSheet, Text ,Image, PermissionsAndroid,TouchableHighlight,TouchableOpacity, SafeAreaView ,StatusBar} from 'react-native';


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
        zIndex:3,
        height:50, 
        backgroundColor:"rgb(255,255,255)",
        position:'relative',
        
        flexDirection:"row",
        
        shadowColor: 'grey', 
        elevation: 10,  
        
    },
    logo:{
        marginLeft:10,
        
        justifyContent:'center',
        alignItems:'center'
        
    },
    iglogo:{
        width:120,
        height:40,
        top:3,
        left:1
    },
    cam:{
        left:140,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    },
    
    camLogo:{
        
        width:20,  
        resizeMode:"contain"
    },
    
    dms:{
       
       justifyContent:'center',
       paddingHorizontal:10,
       left:140
       
    },
    dmsLogo:{
        width:30,
        resizeMode:"contain"
    },

    notiBadgeContainer:{
        backgroundColor:'red',
        position:'absolute',
        zIndex:2,
        left:26,
        top:8,
        paddingHorizontal:5,
        borderRadius:12
        
        
    },
    notiBadge:{
        fontSize:10,
        color:"white",
        fontWeight:"800"
    }
   

})

export default Header;
