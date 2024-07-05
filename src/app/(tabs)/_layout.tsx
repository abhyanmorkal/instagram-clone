import { Stack, Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout(){
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor:'black',
      tabBarShowLabel:false,
      tabBarStyle:{
        marginBottom:20,
        minHeight:60,
        marginHorizontal:20,
        borderRadius:50,
      }
    }}>
      <Tabs.Screen name="index" options={{headerTitle:"For you", 
        tabBarIcon:({color})=><FontAwesome size={28} name="home" color={color}/> }}/>
      <Tabs.Screen name="create-post" options={{headerTitle:"For you", 
        tabBarIcon:({color})=><FontAwesome size={28} name="plus-square-o" color={color}/> }}/>
      <Tabs.Screen name="profile" options={{headerTitle:"For you", 
        tabBarIcon:({color})=><FontAwesome size={28} name="user" color={color}/> }}/>
    </Tabs>
  )
}