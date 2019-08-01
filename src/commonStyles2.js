import React from "react";
import store from './store';

function commonStyles2() {
    const baseFont = store.getState().styles.baseFont;

    const stylesStatics = {
        colors: {
            primary: '#30A3D5',
            statusBar: '#30A3D5',
            background: '#f3f3f3',
            borderColor: '#cfcfcf',
            mainText: '#2f2f2f',
            subText: '#7a7a7a',
            link: '#30A3D5'
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

    var font = {}

    if(baseFont == 0){
        font = {
            font: {
                fontSize: {
                    large: 16,
                    regular: 14,
                    medium: 12,
                },
                fontWeight: "600"
            }
        }
    }else{
        font = {
            font: {
                fontSize: {
                    large: 18,
                    regular: 16,
                    medium: 14,
                },
                fontWeight: "600"
            }
        }
    }

    const styles = {
        ...stylesStatics,
        ...font
    }

    return styles
}

export default commonStyles2