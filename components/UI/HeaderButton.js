import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { Platform } from 'react-native'
import Color from '../../constants/Color'
import { HeaderButton } from 'react-navigation-header-buttons'

const CustomHeaderButton = props =>{
    return <HeaderButton {...props} 
    IconComponent={Ionicons} 
    iconSize={23} 
    color={Platform.OS==='android'? 'white':Color.primary}/>
}

export default CustomHeaderButton