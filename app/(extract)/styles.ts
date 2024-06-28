import styled from "styled-components/native";

interface SectionSpacingProps {
  margin?: string;
  marginRight?: string;
  marginLeft?: string;
  fontSize?: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.ScrollView`
  padding: 28px 28px 280px 28px;
`;

export const Section = styled.View`
  margin-bottom: 16px;
`;

export const SectionSpacing = styled.View<SectionSpacingProps>`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(props) => (props.margin ? props.margin : "0px")};
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #6e848c;
`;

export const BiggerText = styled.Text`
  font-size: 18px;
  color: #6e848c;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #798994;
  margin-bottom: 4px;
`;

export const BoldText = styled.Text`
  font-size: 14px;
  color: #6e848c;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 18px;
`;

export const TableHeaderText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

export const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const TableCell = styled.Text<SectionSpacingProps>`
  color: #000;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;

export const TotalSection = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #6e848c;
`;

export const TotalValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const FooterSection = styled.View`
  margin-top: 16px;
  align-items: flex-start;
  padding-bottom: 50px;
`;

export const FooterText = styled.Text`
  font-size: 14px;
  color: #798994;
  margin-top: 4px;
`;

export const ScrollToTopButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const ScrollToTopButtonText = styled.Text`
  color: #f31c5b;
  margin-left: 4px;
`;
