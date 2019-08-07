import styled from 'styled-components/native';
import commonStyles from '../../commonStyles';

export const Container = styled.View`
    background-color: ${props => props.styles.colors.containerBackgroundColor};
    height: 100%;
`;

export const ContainerBody = styled.View`
    margin-top: 5px;
    border-top-width: 1px;
    border-color: ${props => props.styles.colors.borderColor};
    padding: ${commonStyles.metrics.basePadding}px;
`;

export const Title = styled.Text`
    font-size: ${props => props.styles.font.fontSize.large}px;
    font-weight: ${props => props.styles.font.fontWeight};
    color: ${props => props.styles.colors.mainText};
    margin-bottom: ${commonStyles.metrics.baseMargin}px;
`;

export const Body = styled.View`
    margin-bottom: 20px;
    margin-left: ${commonStyles.metrics.baseMargin}px;
    margin-right: ${commonStyles.metrics.baseMargin}px;
`;

export const BodyTitle = styled.Text`
    font-size: ${props => props.styles.font.fontSize.regular}px;
    color: ${props => props.styles.colors.mainText};
    margin-bottom: 5px;
`;
