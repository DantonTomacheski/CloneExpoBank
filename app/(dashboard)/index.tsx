import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Stack } from "expo-router";
import {
  ContainerBia,
  BiaRow,
  SearchContainer,
  SearchText,
  RedText,
  MicContainer,
  Container,
  ContainerRed,
  RedIcons,
  TextIcon,
  ContainerCol,
  ContainerRow,
  ContentIcon,
  ContentText,
  ContainerPix,
  BackgroundIconPix,
  WhitePix,
  PixText,
  Base,
  TextBase,
} from "./styles";

import Header from "@/components/Header";
import { LinearGradient } from "expo-linear-gradient";

const GradientLinear = ({ children }: any) => {
  return (
    <LinearGradient
      colors={["#f31c5b", "#cc092f"]}
      start={{ x: 1, y: 0.1 }}
      end={{ x: 0, y: 1 }}
      style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 4,
      }}
    >
      {children}
    </LinearGradient>
  );
};

const Dashboard = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Header />
      <ContainerBia>
        <BiaRow>
          <SearchContainer>
            <SearchText>
              Fale com a <RedText>BIA</RedText>
            </SearchText>
            <Ionicons name="search" size={20} color="red" />
          </SearchContainer>
          <MicContainer>
            <Ionicons name="mic-outline" size={20} color="#fff" />
          </MicContainer>
        </BiaRow>
      </ContainerBia>
      <Container>
        <ContainerRed>
          <RedIcons>
            <GradientLinear>
              <Ionicons name="business-outline" size={20} color="#fff" />
            </GradientLinear>
            <TextIcon>Meus Bancos</TextIcon>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#F31C5B"
            />
          </RedIcons>

          <RedIcons>
            <GradientLinear>
              <Ionicons name="pie-chart-outline" size={20} color="#fff" />
            </GradientLinear>
            <TextIcon>Open Finance</TextIcon>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#F31C5B"
            />
          </RedIcons>
        </ContainerRed>

        <ContainerCol>
          <ContainerRow>
            <ContentIcon>
              <Ionicons
                name="swap-horizontal-outline"
                size={30}
                color="#F31C5B"
              />
              <ContentText>Transferências</ContentText>
            </ContentIcon>

            <ContentIcon>
              <Ionicons name="barcode-outline" size={30} color="#F31C5B" />
              <ContentText>Pagamentos</ContentText>
            </ContentIcon>
          </ContainerRow>

          <ContainerRow>
            <ContentIcon>
              <Ionicons name="card-outline" size={30} color="#F31C5B" />
              <ContentText>Cartões</ContentText>
            </ContentIcon>

            <ContentIcon>
              <FontAwesome6 name="pix" size={30} color="#F31C5B" />
              <ContentText>Pix</ContentText>
            </ContentIcon>
          </ContainerRow>

          <ContainerRow>
            <ContentIcon>
              <Ionicons name="logo-usd" size={30} color="#F31C5B" />
              <ContentText>Empréstimos/Consignado</ContentText>
            </ContentIcon>

            <ContentIcon>
              <Ionicons name="analytics-outline" size={30} color="#F31C5B" />
              <ContentText>Investimentos</ContentText>
            </ContentIcon>
          </ContainerRow>
        </ContainerCol>
        <ContainerPix>
          <BackgroundIconPix>
            <FontAwesome6 name="pix" size={30} color="#FFF" />
          </BackgroundIconPix>
          <WhitePix>
            <PixText>Pix: pague, receba e transfira gratuitamente!</PixText>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </WhitePix>
        </ContainerPix>
        <Base>
          <TextBase> Mais serviços</TextBase>
          <Ionicons name="chevron-up-outline" size={20} color="#F31C5B" />
        </Base>
      </Container>
    </>
  );
};

export default Dashboard;
