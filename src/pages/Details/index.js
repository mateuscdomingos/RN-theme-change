import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import { Container, NewContainer, Title, Body } from './styles';
import Header from '../../components/Header';

// import { Container } from './styles';

export default function Details (props) {
    const styles = useSelector(state => state.styles);
    const [item, setItem] = useState([])

    useEffect(() => {
        let item = props.navigation.getParam('new')
        setItem(item)
    }, [])

    backPage = () => props.navigation.goBack()

    return (
        <Container styles={styles}>
            <Header title="Details" iconName="ios-arrow-back" pressIcon={backPage} />
            <NewContainer styles={styles}>
                <Title styles={styles}>{item.title}</Title>
                <Body styles={styles}>{item.body}</Body>
            </NewContainer>
        </Container>
    );
}