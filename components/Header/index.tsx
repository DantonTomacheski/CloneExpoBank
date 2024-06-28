import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View, Text } from "react-native";
import { BlurView } from "expo-blur";
import {
  BorderLine,
  CashAmount,
  CashBold,
  CashContainer,
  CashExctrate,
  CashIconsRow,
  CashLeft,
  CashRight,
  CashText,
  Headers,
  LineBorder,
  MenuContainer,
  TextHeader,
  UserHearder,
  UserRow,
  UserRowLeft,
  UserText,
  BalanceContainer,
  BalanceText,
  LinkExtrato,
} from "./styles";

const GradientLinear = ({ children }: any) => {
  return (
    <LinearGradient colors={["#F31C5B", "#DF1C42", "#B81a6e"]}>
      {children}
    </LinearGradient>
  );
};

const GradientBox = () => (
  <View style={{ borderRadius: 4, overflow: "hidden" }}>
    <BlurView intensity={100} style={{ borderRadius: 8 }} tint="extraLight">
      <View style={{ width: 100, height: 14 }}></View>
    </BlurView>
  </View>
);

const Header = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <GradientLinear>
      <MenuContainer>
        <Headers>
          <Ionicons name="menu-outline" size={30} color="#fff" />
          <TextHeader>bradesco</TextHeader>
          <Ionicons name="notifications-outline" size={25} color="#fff" />
        </Headers>

        <UserHearder>
          <UserRow>
            <UserRowLeft>
              <Ionicons name="person-outline" size={25} color="#fff" />
              <UserText>Olá, Danton</UserText>
            </UserRowLeft>

            <Ionicons name="enter-outline" size={25} color="#fff" />
          </UserRow>

          <BorderLine />
        </UserHearder>

        <CashContainer>
          <CashLeft>
            <CashText>Meu saldo disponível</CashText>
            <CashIconsRow>
              <CashAmount>
                {isBalanceVisible ? (
                  <BalanceContainer>
                    <BalanceText>R$</BalanceText>
                    <CashBold>5.068,98</CashBold>
                  </BalanceContainer>
                ) : (
                  <BalanceContainer>
                    <BalanceText>R$</BalanceText>
                    <GradientBox />
                  </BalanceContainer>
                )}
              </CashAmount>
              <TouchableOpacity
                onPress={toggleBalanceVisibility}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons
                  name={isBalanceVisible ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </CashIconsRow>
          </CashLeft>

          <CashRight>
            <LinkExtrato href="/(extract)">
              <CashExctrate>Ver extrato</CashExctrate>
              <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
            </LinkExtrato>
            <LineBorder />
          </CashRight>
        </CashContainer>
      </MenuContainer>
    </GradientLinear>
  );
};

export default Header;
