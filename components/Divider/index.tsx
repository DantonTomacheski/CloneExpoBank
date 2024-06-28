import React from "react";
import { View, ViewStyle } from "react-native";

interface DividerProps {
  width?: number;
  orientation?: "horizontal" | "vertical";
  color?: string;
  dividerStyle?: ViewStyle;
  marginTop?: number;
  marginBottom?: number;
}

const Divider = ({
  width = 1,
  orientation = "horizontal",
  color = "#DFE4EA",
  dividerStyle,
  marginTop,
  marginBottom,
}: DividerProps) => {
  const dividerStyles: ViewStyle = {
    width: orientation === "horizontal" ? "100%" : width,
    height: orientation === "vertical" ? "100%" : width,
    marginTop: marginTop ? marginTop : 0,
    marginBottom: marginBottom ? marginBottom : 0,
    backgroundColor: color,
    ...dividerStyle,
  };

  return <View style={dividerStyles} />;
};

export default Divider;
