import React,{useCallback, useEffect, useLayoutEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View ,keyboardType} from 'react-native'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import * as productsActions from '../../store/actions/product'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux';

const EditProductScreen = props =>{
    const {navigation,route} = props
    const prodId = route.params==undefined ?"":route.params.productId
    const editedProduct = useSelector(state=> 
        state.products.userProducts.find(prod => prod.id === prodId ))

    const dispatch = useDispatch()

    const [title,setTitle] = useState(editedProduct?editedProduct.title:'');
    const [imageUrl,setImageUrl] = useState(editedProduct?editedProduct.imageUrl:'');
    const [price,setPrice] = useState();
    const [description,setDescription] = useState(editedProduct?editedProduct.description:'');

    console.log("title",title)


    const submitHandler =useCallback(() =>{
        console.log("updatedtitle",title)
        // if(editedProduct){
        //     dispatch(productsActions.updateProduct(prodId,title,description,imageUrl))
            
        // }else{
        //     dispatch(
        //         productsActions.createProduct(title,description,imageUrl,parseInt(price))
        //     )
        // }
        // navigation.goBack()
    },[dispatch,prodId,title,imageUrl,description,price])


    useEffect(()=>{

        navigation.setOptions(
            {title:route.params==undefined?'Add Product':'Edit Product',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item 
                     title="Save"
                     iconName={Platform.OS==='android'? 'md-checkmark':'md-checkmark'}
                     onPress={()=>submitHandler()}
                    />
                </HeaderButtons>
            )
            })
         
    },[navigation])

    return (
        <ScrollView>
            <View style={styles.form}>
        <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput 
            style={styles.input} 
            value={title}
             onChangeText={text => setTitle(text)}
            keyboardType="default"
           autoCapitalize="sentences"
            returnKeyType="next"
        />
        </View>
        <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput 
            style={styles.input} 
            value={imageUrl} 
            onChangeText={text => setImageUrl(text)}
            keyboardType="default"
            autoCapitalize="sentences"
             returnKeyType="next"/>
        </View>
        {editedProduct? null:(<View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput 
            style={styles.input} 
            value={price} 
            onChangeText={text => setPrice(text)}
            keyboardType="decimal-pad"
             returnKeyType="next"/>
        </View>)}
        <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput 
            style={styles.input} 
            value={description}
            onChangeText={text => setDescription(text)}
            keyboardType="default"
            autoCapitalize="sentences"
            multiline
             returnKeyType="next"/>
        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        margin:20
    },
    formControl:{
        width:'100%'
    },
    label:{
        fontFamily:'open-sans-bold',
        marginVertical:8
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:"#ccc",
        borderBottomWidth:1
    }
})

export default EditProductScreen