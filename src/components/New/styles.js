import styled from 'styled-components/native';
import commonStyles from '../../commonStyles';

export const Container = styled.View`
  padding: ${commonStyles.metrics.basePadding}px;
  border-radius: ${commonStyles.metrics.borderRadius}px;
  margin: ${commonStyles.metrics.baseMarginVertical}px ${commonStyles.metrics.baseMarginHorizontal}px;
  background-color: ${commonStyles.colors.containerBackgroundColor};
  box-shadow: 2px 2px 2px ${commonStyles.colors.shadowColor};
`;

export const Title = styled.Text`
  font-size: ${commonStyles.font.fontSize.large}px;
  font-weight: ${commonStyles.font.fontWeight};
  color: ${commonStyles.colors.mainText};
`;

export const Body = styled.Text`
  font-size: ${commonStyles.font.fontSize.regular}px;
  color: ${commonStyles.colors.subText};
`;

export const Link = styled.Text`
  font-size: ${commonStyles.font.fontSize.medium}px;
  color: ${commonStyles.colors.link};
`;