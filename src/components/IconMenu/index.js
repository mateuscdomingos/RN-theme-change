import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useSelector } from "react-redux";

// import { Container } from './styles';

export default function IconMenu(props) {
    const styles = useSelector(state => state.styles);
    return (
        <Icon name={props.name} 
        size={styles.font.fontSize.icon} 
        style={props.info.focused ? {color: styles.colors.menuText} : {color: styles.colors.mainText}} 
        />
    );
}
