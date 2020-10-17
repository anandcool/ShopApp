import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'


const CartItem = props =>{
    const Touch = Platform.OS === 'android' ? TouchableNativeFeedback :TouchableOpacity
    // console.log(props)
    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity}</Text>
                <Text style={styles.title}>{props.title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
                {/* {props.deletable && <Touch onPress={props.onRemove} style={styles.deleteButton}>
                    <Ionicons name={Platform.OS === 'android' ? 'md-trash' :'ios-trash'}
                    size={23}
                    color="red"
                    />
                </Touch>} */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem:{
        padding:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:5
    },
    itemData:{
        flexDirection:'row',
        alignItems:'center'
    },
    quantity:{
        fontFamily:'open-sans',
        color:'#888',
        fontSize:16
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:16
    },
    amount:{
        fontSize:16,
        fontFamily:'open-sans-bold'
    },
    deleteButton:{

    }
})

export default CartItem