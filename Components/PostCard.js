import React from 'react';
import {View, StyleSheet, Text,SafeAreaView, ScrollView, StatusBar,Pressable, Image} from 'react-native';

const currectDate=new Date().getDate();

const PostCard = ({users,feeds}) => {
    const dateUploaded=feeds.updated_at;
    

    return (
      
      <View style={styles.postContainer}>
        
        <View style={styles.postHeader}>
          <View style={{flexDirection:'row' ,alignItems:'center'}} >
          <Image style={styles.headerProfilePic} source={{uri:feeds.user.profile_image.medium}}></Image>
          <Text style={{paddingHorizontal:10,fontSize:14 ,fontWeight:'600'}}>{feeds.user.username}</Text>
          </View>

          <Image style={{width:18,height:18}} source={require('../assets/options.png')}></Image>
          
        </View>

        <View style={styles.postImageContainer}>
          <Image source={{uri:feeds.urls.regular}} style={{width:'100%',height:300}}></Image>
        </View>

        <View style={styles.postFooter}>
       
          <Image style={{height:35,width:30,resizeMode:'contain'}}source={require('../assets/likeicon.png')}></Image>
          <Image style={{height:35,width:34,resizeMode:'contain',left:15}}source={require('../assets/comments.png')}></Image>
          <Image style={{height:35,width:30,resizeMode:'contain',left:30}}source={require('../assets/forward.png')}></Image>
          <Image style={{height:35,width:30,resizeMode:'contain',left:215}}source={require('../assets/saveIcon.png')}></Image>

        </View>

        <View style={styles.postMetaData}>
          <Text style={{fontWeight:"700"}}>{feeds.user.total_photos} likes</Text>
          <View style={{flexDirection:'row'}}><Text style={{fontWeight:"700"}}>{feeds.user.username}</Text><Text> {feeds.description? feeds.description:" "}</Text></View>
          <Text style={{color:'rgb(100,100,100)'}}>view all {feeds.likes} comments</Text>
          <Text>{dateUploaded}</Text>
        </View>

        
      </View>
    
  );
}

const styles = StyleSheet.create({
 
 postContainer:{
  
  position:'relative',
  
 },
 postHeader:{
  borderBottomWidth:0.2,
  borderBottomColor:" rgb(220, 220, 220)",
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:"center",
  padding:12,
  
 },
 headerProfilePic:{
        
        height:30,
        width:30,
        borderRadius:50,
        
        alignItems:'center',
        justifyContent:'center',
        
        
 },
 postFooter:{
  paddingVertical:8,
  paddingHorizontal:13,
  flexDirection:"row",
 
   
  
 },
 postMetaData:{
  paddingHorizontal:15
 }
})
 



export default PostCard;
