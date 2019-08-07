import React from 'react';
import { useSelector } from "react-redux";
import { TouchableOpacity } from 'react-native';
import { Container, Title, Body, Link } from './styles';

// import { Container } from './styles';

export default function New(props) {
    const styles = useSelector(state => state.styles);
    return (
        <Container styles={styles}>
            <Title styles={styles}>{props.new.title}</Title>
            <Body styles={styles} numberOfLines={4}>{props.new.body}</Body>
            <TouchableOpacity onPress={ () => { props.openDetails(props.new) } }>
                <Link styles={styles}>See more...</Link>
            </TouchableOpacity>
        </Container>
    );
}
