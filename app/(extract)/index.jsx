import React, { useState, useEffect, useRef } from "react";
import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import Divider from "../../components/Divider";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Container,
  Section,
  SectionTitle,
  Text,
  BoldText,
  TableHeader,
  TableHeaderText,
  TableRow,
  TableCell,
  TotalSection,
  TotalText,
  TotalValue,
  SectionSpacing,
  BiggerText,
  FooterSection,
  FooterText,
  ScrollToTopButton,
  ScrollToTopButtonText,
} from "./styles";

const transactions = [
  {
    date: "25/06",
    description:
      "TRANSF SALDO C/SAL P/CC\nJMALUCELLI SERVICOS TENOCLOGIA\nDoct 2500646",
    amount: 5109.0,
  },
  {
    date: "25/06",
    description:
      "TRANSFERENCIA PIX PAI E MAE FOGAO\nDES: LUIZ DANIEL MOREIRA 25/06\nDocto 0606090",
    amount: -191.13,
  },
  {
    date: "25/06",
    description:
      "TRANSFERENCIA PIX CLARO SERVICO\nDES: Claro 25/06\nDocto 2138016",
    amount: -250.0,
  },
  {
    date: "26/06",
    description:
      "TRANSFERENCIA PIX IFOOD SERVICOS\nDES: IFOOD 26/06\nDocto 1128121",
    amount: -88.89,
  },
  {
    date: "26/06",
    description:
      "TRANSFERENCIA PIX\nREM: PAGSEGURO TECNOLOGIA 27/06\nDocto 1558489",
    amount: 400.0,
  },
  {
    date: "26/06",
    description:
      "TRANSFERENCIA PIX\nREM: PAGSEGURO TECNOLOGIA 27/06\nDocto 1558489",
    amount: 90.0,
  },
];

const futureTransactions = [
  {
    date: "05/07",
    description: "GASTOS CARTAO DE CREDITO\nDocto 3720172",
    amount: 4910.24,
  },
];

export default function Extract() {
  const scrollViewRef = useRef(null);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [futureTotalAmount, setFutureTotalAmount] = useState(0);

  useEffect(() => {
    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString(
      "pt-BR"
    )} - ${now.toLocaleTimeString("pt-BR")}`;
    setCurrentDateTime(formattedDateTime);

    const total = transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
    setTotalAmount(total);

    const futureTotal = futureTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
    setFutureTotalAmount(futureTotal);
  }, []);

  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Extrato bancário",
          headerBackTitleVisible: false,
        }}
      />
      <Container>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingBottom: 60,
            paddingHorizontal: 28,
            paddingTop: 28,
          }}
        >
          <Section>
            <SectionTitle>DISPONÍVEL</SectionTitle>
            <SectionSpacing margin="8px">
              <BiggerText>= Total Disponível</BiggerText>
              <BoldText>5.068,98</BoldText>
            </SectionSpacing>
            <SectionSpacing margin="8px">
              <BiggerText>+ Conta-Corrente</BiggerText>
              <BoldText>5.068,98</BoldText>
            </SectionSpacing>
            <SectionSpacing margin="8px">
              <Text>Total de Recursos</Text>
              <BoldText>5.068,98</BoldText>
            </SectionSpacing>
            <SectionSpacing margin="40px">
              <Text>Saldo Disponível P/ Investimento</Text>
              <BoldText>5.068,98</BoldText>
            </SectionSpacing>
            <Divider
              width={1}
              color="#DFE4EA"
              marginTop={16}
              marginBottom={16}
            />
          </Section>

          <Section>
            <SectionTitle>Últimos Lançamentos</SectionTitle>
            <SectionTitle>Conta-Corrente</SectionTitle>
            <TableHeader>
              <TableHeaderText>Data</TableHeaderText>
              <TableHeaderText>Histórico</TableHeaderText>
              <TableHeaderText>Valor (R$)</TableHeaderText>
            </TableHeader>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell marginRight="20px">{transaction.date}</TableCell>
                <TableCell fontSize="12px">{transaction.description}</TableCell>
                <TableCell
                  marginLeft="20px"
                  style={{ color: transaction.amount < 0 ? "red" : "black" }}
                >
                  {transaction.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
            <TotalSection>
              <TotalText>TOTAL</TotalText>
              <TotalValue>{totalAmount.toFixed(2)}</TotalValue>
            </TotalSection>
            <Divider
              width={1}
              color="#DFE4EA"
              marginTop={16}
              marginBottom={16}
            />
          </Section>

          <Section>
            <SectionTitle>Lançamentos Futuros</SectionTitle>
            <SectionTitle>Conta-Corrente</SectionTitle>
            <TableHeader>
              <TableHeaderText>Data</TableHeaderText>
              <TableHeaderText>Histórico</TableHeaderText>
              <TableHeaderText>Valor (R$)</TableHeaderText>
            </TableHeader>
            {futureTransactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell fontSize="12px">{transaction.description}</TableCell>
                <TableCell
                  style={{ color: transaction.amount < 0 ? "red" : "black" }}
                >
                  {transaction.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </Section>

          <TotalSection>
            <TotalText>TOTAL</TotalText>
            <TotalValue>{futureTotalAmount.toFixed(2)}</TotalValue>
          </TotalSection>
          <FooterSection>
            <FooterText>{currentDateTime}</FooterText>
            <FooterText>Extratos para Simples Conferência</FooterText>
            <FooterText>Sujeito a alterações</FooterText>
          </FooterSection>

          <Divider width={1} color="#DFE4EA" marginTop={16} marginBottom={16} />
          <ScrollToTopButton onPress={handleScrollToTop}>
            <Entypo name="chevron-with-circle-up" size={24} color="#f31c5b" />
            <ScrollToTopButtonText>Voltar ao topo</ScrollToTopButtonText>
          </ScrollToTopButton>
          <Divider width={1} color="#DFE4EA" marginTop={16} marginBottom={16} />
        </ScrollView>
      </Container>
    </>
  );
}
