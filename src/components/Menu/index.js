import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { DrawerItems, SafeAreaView } from 'react-navigation';
import RadioForm  from 'react-native-simple-radio-button';

import { ContainerBody, Title, Body, BodyTitle } from './styles';
import Header from '../Header';
import commonStyles from '../../commonStyles';
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
        color: styles.colors.primary,
    }

    const drawerItemsConfig = {
        ...props,
        labelStyle,
        activeLabelStyle,

    }

    console.log(styles.font.fontSize.large)

    onInputChange = (value) => {
        dispatch(StylesActions.toggleFontSize(value))
    }
    
    return (
        <View>
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
                        onPress={(value) => { onInputChange(value)}} />
                    </Body>
                    <Body styles={styles}>
                        <BodyTitle styles={styles}>Font Size</BodyTitle>
                        <RadioForm
                        radio_props={font_props}
                        buttonSize={12}
                        buttonColor={styles.colors.secondary}
                        selectedButtonColor={styles.colors.secondary}
                        labelStyle={styleRadioLabel}
                        onPress={(value) => { onInputChange(value)}} />
                    </Body>
                </ContainerBody>
            </ScrollView>
        </View>
    );
}

const styless = StyleSheet.create({
    containerBody: {
        marginTop: 5,
        borderTopWidth: 1,
        borderColor: commonStyles.colors.borderColor,
        padding: commonStyles.metrics.basePadding
    },
    settings: {
        marginBottom: 10,
        fontSize: commonStyles.font.fontSize.large,
        fontWeight: commonStyles.font.fontWeight,
        color: commonStyles.colors.mainText
    },
    body: {
        marginBottom: 20,
        marginHorizontal: 10
    },
    bodyTitle: {
        fontSize: commonStyles.font.fontSize.regular,
        color: commonStyles.colors.mainText,
        marginBottom: 5
    }
});