import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import MyText from '../Components/MyText'
import DashboardItem from '../Components/DashboardItem'
// import Globe from '../assets/images/Globe.png'
// import BoxedPlane from '../assets/images/BoxedPlane.png'
// import HalfPlane from '../assets/images/HalfPlane.png'
// import History from '../assets/images/History.png'
// import Plane from '../assets/images/Plane.png'
// import Truck from '../assets/images/Truck.png'

const Dashboard = () => {
    const [person, setPerson] = useState({
        image:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        name:"Shaheer"
    })

    const menu = [
        {image:require('../assets/images/Globe.png'), text:"Find Trips"},
        {image:require('../assets/images/Plane.png'), text:"Requests"},
        {image:require('../assets/images/HalfPlane.png'), text:"Post Request"},
        {image:require('../assets/images/BoxedPlane.png'), text:"My Trips"},
        {image:require('../assets/images/Truck.png'), text:"Courier Service"},
        {image:require('../assets/images/History.png'), text:"History"},
    ]
  return (
    <View style={styles.container}>
    
      <Header style={{marginHorizontal:20}} image={person.image} name={person.name} greeting={"Good Morning"}  />
    
        <MyText style={{fontWeight:"500",fontSize:18,lineHeight:27, marginHorizontal:20, marginTop:27}}>Dashboard</MyText>

        <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
            <FlatList  
            data={menu}
            keyExtractor={(item,index)=>item.text}
            renderItem={({item,index})=>
            <DashboardItem style={{marginLeft:index%2!==0 ? 20 : 0 ,marginRight:index%2===0 ? 20 : 0 ,marginVertical:10 ,width:"50%"}} image={item.image} text={item.text} />
        }
            />
        </View>

    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40
    }
})