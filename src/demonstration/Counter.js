import React, {useState, useEffect} from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

const Counter = () => {
    const [ count, setCount ] = useState(0)
    const [ newCount, setNewCount ] = useState(0)

    useEffect(() => {
        console.log(`count changed`)
        return () => {
            console.log('useeffect clean up')
        }
    }, [count] )
    return(
        <View style = {style.container}>
            <Text style = {style.title}>{`count: ${count}`}</Text>
            <Button color={'red'} title={'Increase the count'} 
                onPress={() => setCount(count + 1)}>
            </Button>
            <Button color={'green'} title={'Decrease the count'} 
                onPress={() => setCount(count - 1)}>
            </Button>
            <Button color={'red'} title={'Increase the count'} 
                onPress={() => setNewCount(count + 1)}>
            </Button>
            <Button color={'green'} title={'Decrease the count'} 
                onPress={() => setNewCount(count - 1)}>
            </Button>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf:'center',
        fontSize: 25,
        marginTop: 25
    }
})
export default Counter