import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import { Feather,Entypo} from '@expo/vector-icons';


const index = () => {
  return (
    <ScrollView>
      <LinearGradient color={["#7F7FD5","E9E4F0"]} style={{flex:1}}>
        <View>
            <Feather name="bar-chart" size={24} color="black" />
            <Text>Employee Management System</Text>
            <Entypo name='lock' size={24} color="black" />
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})