import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity 
} from 'react-native'

import styles from './styles'

export default (props) => {
    return (
        <View style={[styles.container, styles.shadow]}>
            <Text style={styles.title}>{props.new.title}</Text>
            <Text style={styles.body} numberOfLines={5}>{props.new.body}</Text>
            <TouchableOpacity onPress={ () => { props.openDetails(props.new) } }>
                <Text style={styles.link}>See more...</Text>
            </TouchableOpacity>
        </View>
    )
}