import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.colors.background
    },
    newContainer: {
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
        marginTop: 5,
        fontSize: commonStyles.font.fontSize.regular,
        color: commonStyles.colors.subText
    },
});
  
export default styles;