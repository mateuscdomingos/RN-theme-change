import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
    container: {
        padding: commonStyles.metrics.basePadding,
        borderRadius: commonStyles.metrics.borderRadius,
        marginVertical: commonStyles.metrics.baseMarginVertical,
        marginHorizontal: commonStyles.metrics.baseMarginHorizontal,
        backgroundColor: '#FFFFFF',
    },
    shadow: commonStyles.shadow,
    title: {
        fontSize: commonStyles.font.fontSize.large,
        fontWeight: commonStyles.font.fontWeight,
        color: commonStyles.colors.mainText
    },
    body: {
        fontSize: commonStyles.font.fontSize.regular,
        color: commonStyles.colors.subText
    },
    link: {
        marginTop: 5,
        fontSize: commonStyles.font.fontSize.medium,
        color: commonStyles.colors.link
    }
});
  
export default styles;