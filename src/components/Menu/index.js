import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import {
    Header,
    Body,
    Title
} from "native-base"
import { DrawerItems, SafeAreaView } from 'react-navigation';
import RadioForm  from 'react-native-simple-radio-button'

// import { Container } from './styles';
import commonStyles from '../../commonStyles'

const theme_props = [
    {label: 'Light', value: 0 },
    {label: 'Dark', value: 1 }
]
const font_props = [
    {label: 'Small', value: 0 },
    {label: 'Medium', value: 1 },
    {label: 'Large', value: 2 }
]

export default class Menu extends Component {
    componentDidMount = () => {
        console.log(this.props.navigation)
    }

    onInputChange = () => {}
    render() {
        return (
            <View>
                <Header hasTabs style={{ backgroundColor: commonStyles.colors.primary }}>
                    <StatusBar barStyle="light-content" backgroundColor={commonStyles.colors.statusBar} />
                    <Body >
                        <Title style={{ color: '#FFFFFF', fontSize: 16 }}>Menu</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View>
                        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                            <DrawerItems {...this.props} />
                        </SafeAreaView>
                    </View>
                    <View style={styles.containerBody}>
                        <Text style={styles.settings}>Settings</Text>
                        <View style={styles.body}>
                            <Text style={styles.bodyTitle}>Theme</Text>
                            <RadioForm
                            radio_props={theme_props}
                            buttonSize={12}
                            buttonColor={commonStyles.colors.secondary}
                            selectedButtonColor={commonStyles.colors.secondary}
                            formHorizontal={true}
                            labelStyle={styles.formLabel}
                            onPress={(value) => { this.onInputChange(value)}} />
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.bodyTitle}>Font Size</Text>
                            <RadioForm
                            radio_props={font_props}
                            buttonSize={12}
                            buttonColor={commonStyles.colors.secondary}
                            selectedButtonColor={commonStyles.colors.secondary}
                            labelStyle={styles.formLabel}
                            onPress={(value) => { this.onInputChange(value)}} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
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
    },
    formLabel: {
        marginRight: 20,
        fontSize: commonStyles.font.fontSize.medium,
        color: commonStyles.colors.subText
    },
});