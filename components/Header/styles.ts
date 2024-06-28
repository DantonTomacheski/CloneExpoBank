import styled from "styled-components/native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export const MenuContainer = styled.View`
  margin-top: 30px;
  padding: 12px 24px 0px 24px;
`;

export const Headers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const UserHearder = styled.View`
  padding: 24px 8px 8px 8px;
`;

export const UserRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserRowLeft = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const UserText = styled.Text`
  margin-left: 8px;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
`;

export const BorderLine = styled.View`
  margin-top: 2px;
  border: 0.4px;
  border-color: #fff;
  opacity: 0.6;
`;

export const CashContainer = styled.View`
  padding: 24px 8px 8px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const CashLeft = styled.View``;

export const CashText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const CashIconsRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LinkExtrato = styled(Link)`
  flex-direction: row;
  align-items: center;
`;

export const CashAmount = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

export const CashBold = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const CashRight = styled.View``;

export const LineBorder = styled.View`
  margin-top: 2px;
  border: 0.5px;
  border-color: #fff;
`;

export const CashExctrate = styled.Text`
  font-weight: 500;
  color: #fff;
`;

// Novo estilo adicionado para o quadrado com gradiente cinza
export const GradientBox = styled(ExpoLinearGradient).attrs({
  colors: ["#dcdcdc", "#c0c0c0", "#a9a9a9"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100px;
  height: 20px;
  border-radius: 4px;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-right: 8px;
`;
