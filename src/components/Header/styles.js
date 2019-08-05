import styled from 'styled-components/native';
import commonStyles from '../../commonStyles';

export const Container = styled.View`
    background-color: ${commonStyles.colors.primary};
    height: ${commonStyles.metrics.headerHeight};
    padding-top: ${commonStyles.metrics.headerPadding};
    padding-right: ${commonStyles.metrics.basePadding};
    padding-left: ${commonStyles.metrics.basePadding};
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${commonStyles.colors.barTextColor};
    font-size: ${commonStyles.font.fontSize.textBar};
    margin-left: 100px;
`;
