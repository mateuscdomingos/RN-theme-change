import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Menu extends Component {
    componentDidMount = () => {
        console.log(this.props.navigation)
    }
    render() {
        return (
            <View>
                <Text>Teste</Text>
            </View>
        );
    }
}
