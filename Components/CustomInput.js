import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = (props) => {
  return (
    <View style={[styles.container,props.style]}>
      {props.icon && <props.icon  />}
      <TextInput placeholder={props.placeholder} style={{marginHorizontal:5,flex:1}} />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderRadius:8,
        borderColor:"#161616",
        paddingHorizontal:13,
        paddingVertical:16
    }
})