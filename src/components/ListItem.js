import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import { weatherType } from '../utilities/weatherType'


const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, tempe, dateTextWrapper} = style
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={20} color={'yellow'} />
      <View style={style.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>

      <Text style={tempe}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20
  },
  txt: {
    color: 'white'
  },
  tempe: {
    color: 'white',
    fontSize: 12
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})
export default ListItem
