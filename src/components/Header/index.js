import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../commonStyles';

import { Container, Title } from './styles';

export default function Header() {
    return (
        <Container>
            <Icon name="ios-arrow-back" size={24} color={commonStyles.colors.barTextColor} />
            <Title>Teste</Title>
        </Container>
    );
}
