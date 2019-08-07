import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";

import { Container, Title, TitleContainer } from './styles';

export default function Header(props) {
    const styles = useSelector(state => state.styles);
    return (
        <Container styles={styles}>
            {
                props.iconName && props.pressIcon && 
                <TouchableOpacity onPress={ () => props.pressIcon() }>
                    <Icon name={props.iconName} 
                    size={styles.font.fontSize.icon} 
                    color={styles.colors.barTextColor} 
                    />
                </TouchableOpacity>
            }
            
            <TitleContainer>
                <Title styles={styles}>{props.title}</Title>
            </TitleContainer>
        </Container>
    );
}
