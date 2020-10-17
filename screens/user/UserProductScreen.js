import React,{useEffect} from 'react'
import {FlatList, Button, Alert} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import Color from '../../constants/Color'
import * as productActions from '../../store/actions/product'


const UserProductScreen = props =>{
    const {navigation} = props
    const userProducts = useSelector(state => state.products.userProducts)
    const disptach = useDispatch();
    
    useEffect(()=>{
        navigation.setOptions(
            {
            title:"Admin",
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
                 title="Save"
                 iconName={Platform.OS==='android'? 'md-checkmark':'ios-checkmark'}
                 onPress={()=>navigation.navigate('EditProduct')}/>
            </HeaderButtons>
        )})
    },[navigation])
    

    const editProductHandler= id =>{
        navigation.navigate('EditProduct',{productId:id})
    }

    const deleteHandler = (id) =>{
        Alert.alert('Are You Sure?','Do you really want to delete this item ? ',[{text:'NO',style:'default'},{
            text:'Yes',
            style:'destructive',
            onPress:()=>{
                disptach(productActions.deleteProduct(id))
            }
        }])
    }

    return <FlatList
            data={userProducts}
            renderItem={itemData =>(
            <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={()=>{console.log("hi")}}>
            <Button color={Color.primary} title="Edit" onPress={()=>editProductHandler(itemData.item.id)}/>
            <Button color={Color.primary} title="Delete" onPress={()=>deleteHandler(itemData.item.id)}/>   
            </ProductItem>
            )
        }/>

}

export default UserProductScreen