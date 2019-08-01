import React from 'react';
import { useSelector } from "react-redux";
import { TouchableOpacity } from 'react-native';
import { Container, Title, Body, Link } from './styles';

// import { Container } from './styles';

export default function New(props) {
    const styles = useSelector(state => state.styles);
    console.log(styles)
    return (
        <Container>
            <Title>{props.new.title}</Title>
            <Body numberOfLines={4}>{props.new.body}</Body>
            <TouchableOpacity onPress={ () => { props.openDetails(props.new) } }>
                <Link>See more...</Link>
            </TouchableOpacity>
        </Container>
    );
}
