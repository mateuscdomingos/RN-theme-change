import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity 
} from 'react-native'

import styles from './styles'

import { connect } from 'react-redux'

const News = (props) => {
    console.log(styles)
    return (
        <View style={[styles.container, styles.shadow]}>
            <Text style={styles.title}>{props.new.title}</Text>
            <Text style={styles.body} numberOfLines={4}>{props.new.body}</Text>
            <TouchableOpacity onPress={ () => { props.openDetails(props.new) } }>
                <Text style={styles.link}>See more... {props.size.baseFont}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect(state => ({ size: state.styles }) )(News)