import React, { useEffect } from 'react'
import {FlatList,Platform,Button} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {useDispatch, useSelector} from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import Color from '../../constants/Color'
import * as CartActions from '../../store/actions/cart'

const ProductsOverViewScreen = props =>{
    const {navigation} = props

    useEffect(()=>{
        navigation.setOptions(
            {
            title:"All Products",
            headerLeft:() => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                     title="Menu"
                     iconName={Platform.OS==='android'? 'md-menu':'ios-menu'}
                     onPress={()=>navigation.toggleDrawer()}/>
                </HeaderButtons>
            ),
            headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                 title="Cart"
                 iconName={Platform.OS==='android'? 'md-cart':'ios-cart'}
                 onPress={()=>navigation.navigate('Cart')}/>
            </HeaderButtons>
        )})
    },[navigation])

 
    //get the data from the store
    const products = useSelector(state =>  state.products.availabelProducts)
    const dispatch = useDispatch()
    
    const selectItemHandler = (id,title) =>{
         navigation.navigate('ProductDetail',{
            productId:id,
            title:title
        })
    }

return <FlatList 
        data={products}
        renderItem={
        itemData=> 
        {
        return <ProductItem 
                image ={itemData.item.imageUrl} 
                 title={itemData.item.title}
                price={itemData.item.price}
                onSelect={()=>selectItemHandler(itemData.item.id,itemData.item.title)}
                >
                <Button color={Color.primary} title="View Details" onPress={()=>selectItemHandler(itemData.item.id,itemData.item.title)}/>
                <Button color={Color.primary} title="To Cart" onPress={()=> dispatch(CartActions.addToCart(itemData.item))}/>
                    </ProductItem>}
         } />
}

export default ProductsOverViewScreen