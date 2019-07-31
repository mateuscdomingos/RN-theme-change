import React from "react";
import { useSelector } from 'react-redux';

export default function commonStyles2() {
    // const counter = useSelector(state => state.styles);

    return {
        colors: {
            primary: '#30A3D5',
            statusBar: '#30A3D5',
            background: '#f3f3f3',
            borderColor: '#cfcfcf',
            mainText: '#2f2f2f',
            subText: '#7a7a7a',
            link: '#30A3D5'
        },
        font: {
            fontSize: {
                large: 16,
                regular: 14,
                medium: 12,
            },
            fontWeight: "600"
        },
        metrics: {
            baseMargin: 10,
            basePadding: 15,
            baseMarginVertical: 4,
            baseMarginHorizontal: 10,
            borderRadius: 5
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
}