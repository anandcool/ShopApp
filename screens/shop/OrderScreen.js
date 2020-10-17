 import React,{useEffect} from 'react'
import { FlatList, Text,Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/shop/OrderItem'

 const OrderScreen = props =>{
    const {navigation} = props

     const orders = useSelector(state=>state.orders.orders)
    //  console.log(orders)
     useEffect(()=>{
        navigation.setOptions(
            {
            title:"Your Orders",
            headerLeft:() => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                     title="Menu"
                     iconName={Platform.OS==='android'? 'md-menu':'ios-menu'}
                     onPress={()=>navigation.toggleDrawer()}/>
                </HeaderButtons>
            )})
    },[navigation])


 return <FlatList data={orders} 
            keyExtractor={item=>item.id} 
            renderItem={itemData => 
                <OrderItem
                  amount={itemData.item.totalAmount}
                  date={itemData.item.readableDate}
                  items={itemData.item.items}
                />
              }
            />
            }
 export default OrderScreen