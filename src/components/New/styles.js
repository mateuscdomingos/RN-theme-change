import styled from 'styled-components/native';
import commonStyles from '../../commonStyles';

export const Container = styled.View`
  padding: ${commonStyles.metrics.basePadding}px;
  border-radius: ${commonStyles.metrics.borderRadius}px;
  margin: ${commonStyles.metrics.baseMarginVertical}px ${commonStyles.metrics.baseMarginHorizontal}px;
  background-color: ${props => props.styles.colors.containerBackgroundColor};
  box-shadow: 2px 2px 2px ${props => props.styles.colors.shadowColor};
`;

export const Title = styled.Text`
  font-size: ${props => props.styles.font.fontSize.large}px;
  font-weight: ${props => props.styles.font.fontWeight};
  color: ${props => props.styles.colors.mainText};
`;

export const Body = styled.Text`
  font-size: ${props => props.styles.font.fontSize.regular}px;
  color: ${props => props.styles.colors.subText};
`;

export const Link = styled.Text`
  font-size: ${props => props.styles.font.fontSize.medium}px;
  color: ${props => props.styles.colors.link};
`;