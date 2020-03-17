import React from 'react'
import {StyleSheet,View,Text, Image, ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const Header = ({navigation, title}) => {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <ImageBackground 
            style={styles.header}
            source={require('../assets/game_bg.png')}
        >
            <MaterialIcons 
                name='menu' size={28} 
                onPress={openMenu}
                style={styles.icon}
            />
            <View style={styles.headertitle}>
                <Image 
                    source={require('../assets/heart_logo.png')} 
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    header:{
        marginTop: 26,
        width: '100%',
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImage:{
        height: 26,
        width: 26,
        marginHorizontal: 10
    },
    headertitle:{
        flexDirection:'row',
        alignItems:'center',
        alignContent: 'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon:{
        position:'absolute',
        left: 16,
        top: 12
    }
})
export default Header