import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'


import productsReducer from './store/reducers/product'
import cartReducer from './store/reducers/cart'
import OrdersReducer from './store/reducers/order'
import ShopNavigator from './navigation/ShopNavigator';


const rootReducer = combineReducers({
  products:productsReducer,
  cart:cartReducer,
  orders:OrdersReducer
})

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


const store = createStore(rootReducer)


export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false)

  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
  }

  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  );
}

