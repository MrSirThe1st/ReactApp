import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({weatherData}) => {
  const {wrapper, container, tempStyle, feels, highLowWrapper, highLow, bodyWrap, description, message} = style
  
  const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style= {[ wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}
    ]}>
      <View style={container}>
        
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}>{`feels like${feels_like}°`}</Text>

        <RowText 
        messageOne = {`high:${temp_max}° `} 
        messageTwo = {`low:${temp_min}° `} 
        containerStyle = {highLowWrapper}
        messageOneStyle = {highLow} 
        messageTwoStyle = {highLow}
        />
      </View>
      <RowText messageOne = {weather[0]?.description} 
        messageTwo = {weatherType[weatherCondition]?.message} 
        containerStyle = {bodyWrap}
        messageOneStyle = {description} 
        messageTwoStyle = {message}
        />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ADD8E6',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    justifyContent: 'center'
  },
  tempStyle: {
    color: 'white',
    fontSize: 30
  },
  feels: {
    color: 'white',
    fontSize: 20
  },
  highLow: {
    color: 'white',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrap: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
