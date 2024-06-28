import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    BradescoSansBoldItalic: require("../assets/fonts/BradescoSans-BoldItalic-web.ttf"),
    BradescoSansBold: require("../assets/fonts/BradescoSans-Bold-web.ttf"),
    BradescoSansCondensedBold: require("../assets/fonts/BradescoSans-CondensedBold-web.ttf"),
    BradescoSansCondensed: require("../assets/fonts/BradescoSans-Condensed-web.ttf"),
    BradescoSansItalic: require("../assets/fonts/BradescoSans-Italic-web.ttf"),
    BradescoSansLightItalic: require("../assets/fonts/BradescoSans-LightItalic-web.ttf"),
    BradescoSansLight: require("../assets/fonts/BradescoSans-Light-web.ttf"),
    BradescoSansMediumItalic: require("../assets/fonts/BradescoSans-MediumItalic-web.ttf"),
    BradescoSansMedium: require("../assets/fonts/BradescoSans-Medium-web.ttf"),
    BradescoSansRegular: require("../assets/fonts/BradescoSans-Regular-web.ttf"),
    BradescoSansSemiBoldItalic: require("../assets/fonts/BradescoSans-SemiBoldItalic-web.ttf"),
    BradescoSansSemiBold: require("../assets/fonts/BradescoSans-SemiBold-web.ttf"),
    BradescoSansThinItalic: require("../assets/fonts/BradescoSans-ThinItalic-web.ttf"),
    BradescoSansThin: require("../assets/fonts/BradescoSans-Thin-web.ttf"),
    BradescoSansXBoldItalic: require("../assets/fonts/BradescoSans-XBoldItalic-web.ttf"),
    BradescoSansXBold: require("../assets/fonts/BradescoSans-XBold-web.ttf"),
    BradescoVariable: require("../assets/fonts/BradescoSansVariable.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#cc092f",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      <Stack.Screen name="(extract)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: true }} />
    </Stack>
  );
}
