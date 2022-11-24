import React, { useState ,useEffect } from 'react';
import {View, StyleSheet, ScrollView,Text,Image} from 'react-native';
import { Users } from '../Data/Users';
import PostCard from './PostCard';


const StoriesAndFeeds = () => {
    const[feeds,setFeeds]=useState();
    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=3tmr3kZNIf-Bd5tUpt0S3H_wGwaBL2N3S-fJPGvpXRM")
        .then(res=>res.json())
        .then(data=>{
            setFeeds(data)
        })
    }, []);

    

    return (
        <ScrollView>
        <ScrollView style={styles.storyContainer} horizontal showsHorizontalScrollIndicator={false}>

            <View style={styles.stories} >
                <View style={styles.imageContainer}><Image style={styles.profilepicImage} source={{uri:'https://scontent.cdninstagram.com/v/t51.2885-19/308673453_1320344602070529_7677327710423934081_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=tsyOn_eYfSgAX_fx8oY&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAvcMB-0CyxsQtsRSj60-KQSrQfei_r9x0NaT-wSwFUeg&oe=6383779E&_nc_sid=978cb9'}} ></Image><Text style={styles.addStory}>+</Text></View>
                <View style={styles.usernameDiv}><Text style={styles.yourStory}>my story</Text></View>
            </View>

            {Users.map((users,index) => (
                
                <View style={styles.stories} key={users.id}>
                    <View style={styles.imageContainer}><Image style={styles.profilepicImage} source={{uri:users.profilepic}} ></Image></View>
                    <View style={styles.usernameDiv}><Text numberOfLines={1} style={styles.yourStory}>{users.userId}</Text></View>
                </View>
            
            ))}
            


          
            
        </ScrollView>

        <ScrollView style={styles.container}>
                {feeds.map((feeds,index)=>(
                    <PostCard feeds={feeds} users={Users}/>
                ))}
                    
                
        </ScrollView>

        </ScrollView>

        
    );
}

const styles = StyleSheet.create({
    storyContainer:{
        
        paddingHorizontal:8,
        paddingVertical:14
    },
    stories:{
        paddingHorizontal:7,
        alignItems:'center'
        
    },
    addStory:{
        position:'absolute',
        right:0,
        bottom:0,
        color:'white',
        paddingHorizontal:6,
        backgroundColor:' rgb(40, 140, 255)',
        borderRadius:50,
        borderWidth:1.5,
        borderColor:'white',
        textAlign:'center',
        
    },
    imageContainer:{
        backgroundColor:'  rgb(255, 85, 85)',
        height:70,
        width:70,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    
    profilepicImage:{
        height:65,
        width:65,
        borderRadius:50,
        borderWidth:2,
        borderColor:'white',
        backfaceVisibility:"visible",
        
    },
    yourStory:{
       fontSize:12 ,
      
    },
    usernameDiv:{
        zIndex:5,
        alignItems:'center',
        width:70,
        height:20,
        marginVertical:5,
    }
    
})

export default StoriesAndFeeds;
