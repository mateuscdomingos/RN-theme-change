import { Platform } from 'react-native';

export default {
    metrics: {
        baseMargin: 10,
        basePadding: 15,
        baseMarginVertical: 4,
        baseMarginHorizontal: 10,
        borderRadius: 5,
        ...Platform.select({
            ios: { headerHeight: 80, headerPadding: 35 },
            android: { headerHeight: 44, headerPadding: 0 }
        })
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
}