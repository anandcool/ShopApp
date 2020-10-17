import React, { useEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Color from '../../constants/Color';
import * as CartActions from '../../store/actions/cart'

const ProductDetailScreen = props =>{

    const productId = props.route.params.productId;
    const productTitle = props.route.params.title;
    const selectedProduct = useSelector(state => state.products.availabelProducts.find(prod => prod.id === productId))
    const dispatch = useDispatch()
    //Change the HeaderTitle
    useEffect(()=>{
        props.navigation.setOptions({title:productTitle})
    },[props.navigation])
    return(
        <ScrollView>
            <Image style={styles.image} source={{uri:selectedProduct.imageUrl}}/>
            <View style={styles.actions}>
            <Button color={Color.primary} title="Add to Cart" onPress={()=>{dispatch(CartActions.addToCart(selectedProduct))}}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 300
    },
    price:{
        fontSize:20,
        color:'#888',
        textAlign:'center',
        marginVertical:20,
        fontFamily:'open-sans-bold'
    },
    description:{
        fontFamily:'open-sans',
        fontSize:14,
        textAlign:'center',
        marginHorizontal:20
    },
    actions:{
        marginVertical:10,
        alignItems:'center'
    }
})

export default ProductDetailScreen