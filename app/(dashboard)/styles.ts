import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const ContainerBia = styled.View`
  padding: 30px;
  position: absolute;
  margin-top: 190px;
`;

export const BiaRow = styled.View`
  flex-direction: row;
`;

export const SearchContainer = styled.View`
  width: ${width * 0.7}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #fff;
`;

export const SearchText = styled.Text`
  font-size: 16px;
  color: #9b9c9d;
  font-weight: 600;
  font-style: italic;
  margin-left: 32px;
`;

export const RedText = styled.Text`
  font-style: italic;
  color: #cc092f;
  font-weight: bold;
`;

export const MicContainer = styled.View`
  background-color: #f31c5b;
  width: 64px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Container = styled.View`
  background-color: #f0f1f5;
  position: absolute;
  margin-top: 280px;
`;

// distancia q alinha com o resto
export const ContainerRed = styled.View`
  padding: 8px 32px 16px 32px;
  flex-direction: row;
`;

export const RedIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 18px;
`;

export const GradientBackgroundIcon = styled(LinearGradient).attrs({
  colors: ["#f31c5b", "#cc092f"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0.1 },
})`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;

export const TextIcon = styled.Text`
  margin-right: 8px;
  font-size: 12px;
`;

export const ContainerCol = styled.View`
  padding: 0px 32px 8px 32px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const ContentIcon = styled.View`
  background-color: #fff;
  width: ${width * 0.4}px;
  padding: 28px 0px 28px 8px;
  border-radius: 10px;
  margin-right: 12px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const ContentText = styled.Text`
  margin-left: 16px;
`;

export const ContainerPix = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 32px 0px 32px;
`;

export const BackgroundIconPix = styled.View`
  background-color: #f31c5b;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const WhitePix = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${width * 0.68}px;
  height: 60px;
  background-color: #fff;
  padding-right: 4px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const PixText = styled.Text`
  padding-left: 16px;
  padding-right: 16px;
`;

export const Base = styled.View`
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-right: 12px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 32px;
  padding-bottom: 50px;
`;

export const TextBase = styled.Text`
  margin-right: 16px;
  font-family: BradescoSansLightItalic;
  color: #cc092f;
`;
