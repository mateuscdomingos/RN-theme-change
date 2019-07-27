import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity 
} from 'react-native'

export default (props) => {
    return (
        <View>
            <Text>{props.new.title}</Text>
            <Text>{props.new.body}</Text>
        </View>
    )
}