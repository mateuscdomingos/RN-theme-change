import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.colors.background
    },
    body: {
        flex: 1,
    },
    header: { 
        backgroundColor: commonStyles.colors.primary 
    },
    headerTitle: { 
        color: '#FFFFFF', 
        fontSize: 16 
    }
});
  
export default styles;