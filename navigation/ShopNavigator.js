import  React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsOverViewScreen from '../screens/shop/ProductsOverViewScreen';
import Color from '../constants/Color';
import { Platform } from 'react-native';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import { Ionicons } from '@expo/vector-icons';
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';




const ProductsNavigator = createStackNavigator()


const screenStyles = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android'? Color.primary : '',
    },
  
    headerTintColor: Platform.OS === 'android'? 'white': '',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily:'open-sans-bold'
    }
  }

const StackNavigator = () =>{
    return (
        <ProductsNavigator.Navigator screenOptions={screenStyles}>
        <ProductsNavigator.Screen name="ProductsOverView" component={ProductsOverViewScreen} />
        <ProductsNavigator.Screen name="ProductDetail" component={ProductDetailScreen} />
        <ProductsNavigator.Screen name="Cart" component={CartScreen}/>
      </ProductsNavigator.Navigator>
)
}


const DrawerNavigator = createStackNavigator()

const OrderNavigator = () =>{
  return (
      <DrawerNavigator.Navigator screenOptions={screenStyles}>
      <DrawerNavigator.Screen name="Orders" component={OrderScreen} />
    
    </DrawerNavigator.Navigator>

)
}

const AdminNavigator = () =>{
  return (
      <DrawerNavigator.Navigator screenOptions={screenStyles}>
      <DrawerNavigator.Screen name="UserProduct" component={UserProductScreen} />
      <DrawerNavigator.Screen name="EditProduct" component={EditProductScreen}/>
    </DrawerNavigator.Navigator>

)
}


const Drawer = createDrawerNavigator()
const ShopNavigator = () =>{
return (
  <NavigationContainer screenOptions={screenStyles}>
  <Drawer.Navigator initialRouteName="Products">
    <Drawer.Screen 
    name="Products"
    component={StackNavigator}
    options={{
    drawerIcon:() => (<Ionicons 
    name={Platform.OS === 'android' ? 'md-cart':'ios-cart'} 
    size={23} 
    color={Color.primary}/>
    )
    }}
     />
    <Drawer.Screen 
    name="Orders" 
    component={OrderNavigator}
    options={{
      drawerIcon:() => (<Ionicons 
      name={Platform.OS === 'android' ? 'md-list':'ios-list'} 
      size={23} 
      color={Color.primary}/>
      )
      }} />
          <Drawer.Screen 
    name="Admin" 
    component={AdminNavigator}
    options={{
      drawerIcon:() => (<Ionicons 
      name={Platform.OS === 'android' ? 'md-create':'ios-create'} 
      size={23} 
      color={Color.primary}/>
      )
      }} />
  </Drawer.Navigator>
</NavigationContainer>
);
}


export default ShopNavigator