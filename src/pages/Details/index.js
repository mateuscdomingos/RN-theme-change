import React, { Component } from 'react';

import { 
    View, 
    Text,
    StatusBar,
} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Title,
    Button,
    Icon,
} from "native-base"

import commonStyles from '../../commonStyles'
import styles from './styles'

// import { Container } from './styles';

export default class Details extends Component {
    state = {
        item: {}
    }

    componentDidMount = () => { 
        let item = this.props.navigation.getParam('new')
        console.log(item)
        this.setState({ item })
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header hasTabs style={{ backgroundColor: commonStyles.colors.primary }}>
                    <StatusBar barStyle="light-content" backgroundColor={commonStyles.colors.statusBar} />
                    <Left >
                        <Button transparent onPress={() => console.log(this.props.navigation.goBack()) }>
                            <Icon name="arrow-back" style={{color: '#FFFFFF'}} />
                        </Button>
                    </Left>
                    <Body >
                        <Title style={{ color: '#FFFFFF', fontSize: 16 }}>Details</Title>
                    </Body>
                </Header>
                <View style={[styles.newContainer, styles.shadow]}>
                    <Text style={styles.title}>{this.state.item.title}</Text>
                    <Text style={styles.body}>{this.state.item.body}</Text>
                </View>
            </Container>
        );
    }
}