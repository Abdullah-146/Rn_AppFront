import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText'

const Button = (props) => {
  return (
    <View style={[styles.container,props.style]}>
      <MyText style={{fontWeight:"500",fontSize:14,lineHeight:21, color:props.color?props.color:"#FFFFFF"}}>{props.text}</MyText>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:23,
        backgroundColor:"#161616",
        borderRadius:8,
        
    }
})