import React, { Component } from 'react';

import { 
    View, 
    StatusBar,
    FlatList
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
import { Provider } from 'react-redux';

import commonStyles from '../../commonStyles'
import styles from './styles'

import newsList from '../../assets/json'
import New from '../../components/New'

import store from '../../store'

// import { Container } from './styles';

export default class Home extends Component {
    state = {
        newsList: []
    }

    componentDidMount = () => { 
        const news = newsList
        this.setState({ newsList: news }, () => console.log(this.state.newsList)) 
        console.log(store)
    }

    openDetails = (item) => this.props.navigation.navigate('Details', { new: item })

    render() {
        return (
            <Container style={styles.container}>
                <Header hasTabs style={styles.header}>
                    <StatusBar barStyle="light-content" backgroundColor={commonStyles.colors.statusBar} />
                    <Left >
                        <Button transparent onPress={() => this.props.navigation.openDrawer() }>
                            <Icon name="menu" style={{color: '#FFFFFF'}} />
                        </Button>
                    </Left>
                    <Body >
                        <Title style={styles.headerTitle}>Home</Title>
                    </Body>
                </Header>
                <Provider store={store}>
                    <View style={styles.body}>
                        <FlatList data={this.state.newsList}
                        keyExtractor={item =>  `${item.id}`}
                        renderItem={({ item }) => <New new={ item } openDetails={ this.openDetails } />} />
                    </View>
                </Provider>
            </Container>
        );
    }
}