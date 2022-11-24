import React from 'react';
import {View, StyleSheet ,Image} from 'react-native';

const Profile = () => {
    return (
        <View>
            <Image style={{height:50,width:50}} source={{uri:'https://scontent.cdninstagram.com/v/t51.2885-19/308673453_1320344602070529_7677327710423934081_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=tsyOn_eYfSgAX_fx8oY&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAvcMB-0CyxsQtsRSj60-KQSrQfei_r9x0NaT-wSwFUeg&oe=6383779E&_nc_sid=978cb9'}}></Image>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
