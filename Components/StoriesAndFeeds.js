import React, { useState ,useEffect } from 'react';
import {View, StyleSheet, ScrollView,Text,Image, Button} from 'react-native';
import { Users } from '../Data/Users';
import { Feeds } from '../Data/Feeds';
import PostCard from './PostCard';
import Header from './Header';
import Footer from './Footer';
import { Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

const StoriesAndFeeds = ({navigation}) => {

    const [storyViewed,setStoryViewed]=useState(false);
   

    // const[feeds,setFeeds]=useState();
    // useEffect(() => {
    //     fetch("https://api.unsplash.com/photos/?client_id=3tmr3kZNIf-Bd5tUpt0S3H_wGwaBL2N3S-fJPGvpXRM")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setFeeds(data)
    //     })
    // },[]);

    

    return (
        <View>
        <Header navigation={navigation} />
        <ScrollView>
        
        <ScrollView style={styles.storyContainer} horizontal showsHorizontalScrollIndicator={false}>

            <View style={styles.stories} >
                <LinearGradient colors={['violet','red','orange']} end={{ x: 0.1,y: 0.6}} style={styles.imageContainer}>
                    <Image style={styles.profilepicImage} source={{uri:'https://scontent.cdninstagram.com/v/t51.2885-19/308673453_1320344602070529_7677327710423934081_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=tsyOn_eYfSgAX_fx8oY&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAvcMB-0CyxsQtsRSj60-KQSrQfei_r9x0NaT-wSwFUeg&oe=6383779E&_nc_sid=978cb9'}} ></Image>
                    <Text style={styles.addStory}>+</Text>
                </LinearGradient>

                <View style={styles.usernameDiv}>
                    <Text style={styles.yourStory}>my story</Text>
                </View>
            </View>

            {Users.map((users,index) => (
                
                <View style={styles.stories} key={users.id} onTouchEnd={()=>setStoryViewed(true)} >
                    <LinearGradient colors={['violet','red','orange']} end={{ x: 0.1,y: 0.6}} style={!storyViewed&&styles.imageContainer}><Image style={styles.profilepicImage} source={{uri:users.profilepic}} ></Image></LinearGradient>
                    <View style={styles.usernameDiv}><Text numberOfLines={1} style={styles.yourStory}>{users.userId}</Text></View>
                </View>
            
            ))}
            
            <Modal visible={storyViewed}>
                <View style={styles.backButton} onTouchEnd={()=>setStoryViewed(false)}><Text>back</Text></View>
                <Image style={{height:'100%',justifyContent:"center"}} source={{uri:'https://picsum.photos/200/300'}}></Image>
                
            </Modal>    

          
            
        </ScrollView>

        <ScrollView style={styles.feedsContainer}>
        
                {Feeds.map((feeds)=>(
                    <PostCard feeds={feeds} users={Users} key={feeds.id}/>
                ))}
                    
                
        </ScrollView>
        
        </ScrollView>
                    <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    storyContainer:{
        backgroundColor:'white',
        paddingTop:60,
        paddingHorizontal:4,
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
    },
    feedsContainer:{
        marginBottom:50,
        backgroundColor:'white',
    },
    backButton:{
        color:'black',
        width:50,
        bottom:-6,
        padding:5
        
        
    }
    
})

export default StoriesAndFeeds;
