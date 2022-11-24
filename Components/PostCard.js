import React from 'react';
import {View, StyleSheet, Text,SafeAreaView, ScrollView, StatusBar,Pressable, Image} from 'react-native';


const PostCard = ({users,feeds}) => {
    return (
      
      <View style={styles.postContainer}>

        <View style={styles.postHeader}>
          <Image style={styles.headerProfilePic}source={{uri:feeds.urls.thumb}}></Image>
          <Text style={{paddingHorizontal:10}}>{feeds.id}</Text>
        </View>

        <View style={styles.postImage}></View>

        <View style={styles.postFooter}></View>

        <View style={styles.postMetaData}></View>

        
      </View>
    
  );
}

const styles = StyleSheet.create({
 
 postContainer:{
  
  position:'relative',
  backgroundColor:"grey"
 },
 postHeader:{
  flexDirection:'row',
  alignItems:"center",
  padding:8.5

 },
 headerProfilePic:{
        backgroundColor:'  rgb(255, 85, 85)',
        height:30,
        width:30,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        
 }
})
 



export default PostCard;
