import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText'

const DashboardItem = (props) => {
  return (
    <View style={[styles.container,props.style]}>
        <Image resizeMethod='auto' source={props.image}  />
        <MyText style={{marginTop:20, fontWeight:"400",fontSize:16,lineHeight:24}}>{props.text}</MyText>
    </View>
  )
}

export default DashboardItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        paddingVertical:20,
        elevation:10,
        borderRadius:9,
        alignItems:"center"
    }
})