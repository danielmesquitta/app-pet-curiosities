import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary._100};
`;

export const Section = styled.View`
  border-top-width: 2px;
  border-top-color: ${({ theme }) => theme.colors.primary._200};
  padding: 20px 0;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._600};
`;

export const Card = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  background-color: ${({ theme }) => theme.colors.primary._200};
  padding: 20px 12px;
  border-radius: 8px;
  margin: 4px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-color: ${({ theme }) => theme.colors.primary._300};
  border-width: 1px;
`;

export const CardContent = styled.View`
  gap: 4px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._600};
`;

export const CardText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary._600};
`;

export const CardTag = styled.Text``;
