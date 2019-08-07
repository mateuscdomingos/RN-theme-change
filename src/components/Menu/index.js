import React from 'react';

import { View, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { DrawerItems, SafeAreaView } from 'react-navigation';
import RadioForm  from 'react-native-simple-radio-button';

import { Container, ContainerBody, Title, Body, BodyTitle } from './styles';
import Header from '../Header';
import * as StylesActions from '../../store/actions/styles';

const theme_props = [
    {label: 'Light', value: 0 },
    {label: 'Dark', value: 1 }
]
const font_props = [
    {label: 'Small', value: 0 },
    {label: 'Medium', value: 1 },
    {label: 'Large', value: 2 },
    {label: 'Extra large', value: 3 }
]

export default function Menu (props) {
    const styles = useSelector(state => state.styles);
    const dispatch = useDispatch();

    const styleRadioLabel = {
        marginRight: 20,
        fontSize: styles.font.fontSize.medium,
        color: styles.colors.subText
    }

    const labelStyle = {
        fontWeight: 'normal',
        color: styles.colors.mainText,
        fontSize: styles.font.fontSize.regular
    }
    const activeLabelStyle = {
        color: styles.colors.menuText,
    }

    const drawerItemsConfig = {
        ...props,
        labelStyle,
        activeLabelStyle,
        activeBackgroundColor: styles.colors.menuActiveBackground
    }

    onInputChangeFont = (value) => {
        dispatch(StylesActions.toggleFontSize(value))
    }

    onInputChangeTheme = (value) => {
        dispatch(StylesActions.toggleTheme(value))
    }
    
    return (
        <Container styles={styles}>
            <Header title="Menu" />
            <StatusBar barStyle="light-content" backgroundColor={styles.colors.statusBar} />
            <ScrollView>
                <View>
                    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...drawerItemsConfig} />
                    </SafeAreaView>
                </View>
                <ContainerBody styles={styles}>
                    <Title styles={styles}>Settings</Title>
                    <Body styles={styles}>
                        <BodyTitle styles={styles}>Theme</BodyTitle>
                        <RadioForm
                        radio_props={theme_props}
                        buttonSize={12}
                        buttonColor={styles.colors.secondary}
                        selectedButtonColor={styles.colors.secondary}
                        formHorizontal={true}
                        labelStyle={styleRadioLabel}
                        onPress={(value) => { onInputChangeTheme(value)}} />
                    </Body>
                    <Body styles={styles}>
                        <BodyTitle styles={styles}>Font Size</BodyTitle>
                        <RadioForm
                        radio_props={font_props}
                        buttonSize={12}
                        buttonColor={styles.colors.secondary}
                        selectedButtonColor={styles.colors.secondary}
                        labelStyle={styleRadioLabel}
                        onPress={(value) => { onInputChangeFont(value)}} />
                    </Body>
                </ContainerBody>
            </ScrollView>
        </Container>
    );
}