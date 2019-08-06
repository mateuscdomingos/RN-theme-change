import React, { useState, useEffect } from 'react';
import { 
    StatusBar,
    View, 
    FlatList
} from 'react-native';
import { useSelector } from "react-redux";

import { Container} from './styles';

import newsListJson from '../../assets/json'
import New from '../../components/New'
import Header from '../../components/Header';

export default function Home(props) {
    const styles = useSelector(state => state.styles);
    const [newsList, setNewsList] = useState([])

    function updateNewsList(news) {
        setNewsList(news)
    }

    useEffect(() => {
        updateNewsList(newsListJson)
    }, [])

    openMenu = () => props.navigation.openDrawer()
    openDetails = (item) => props.navigation.navigate('Details', { new: item })

    return (
        <Container >
            <Header title="Home" iconName="ios-menu" pressIcon={openMenu} />
            <StatusBar barStyle="light-content" backgroundColor={styles.colors.statusBar} />
            <View style={{ flex: 1 }} >
                <FlatList data={newsList}
                keyExtractor={item =>  `${item.id}`}
                renderItem={({ item }) => <New new={ item } openDetails={ openDetails } />} />
            </View>
        </Container>
    );
}