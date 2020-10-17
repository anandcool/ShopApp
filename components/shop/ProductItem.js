import React from 'react'
import {Button, Image, Platform, StyleSheet, Text,TouchableNativeFeedback,TouchableOpacity,View} from 'react-native'
import Color from '../../constants/Color';

const ProductItem = props =>{
 
    let TouableCmp = TouchableOpacity;
    if(Platform.OS == 'android' && Platform.Version>=21){
        TouableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.product}>
        <TouableCmp onPress={props.onSelect}>
        <View>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:props.image}}/>
            </View>
            <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price}</Text>
            </View>
            <View style={styles.action}>
                {props.children}
            </View>
        </View>
        </TouableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    product:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:15,
        borderRadius:10,
        backgroundColor:'white',
        height:300,
        margin:20,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        marginVertical:4
    },
    price:{
        fontFamily:'open-sans',
        fontSize:14,
        color:'#888'
    },
    action:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'23%',
        paddingHorizontal:20
    },
    details:{
        alignItems:'center',
        height:'17%',
        padding:10
    },
    imageContainer:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    }
})

export default ProductItem