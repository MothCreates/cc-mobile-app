import { Stack } from "expo-router";
import { useEffect } from "react";
import { Appearance, useColorScheme } from "react-native";
import theme from "./theme/theme";
import ThemeContext from "./theme/themeContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  useEffect(() => {
    Appearance.setColorScheme(isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme: isDark ? theme.dark : theme.light}}>
      <Stack screenOptions={{ 
        headerShown: false,
        contentStyle: { 
          backgroundColor: isDark ? theme.dark.background : theme.light.background 
        }
      }} />
    </ThemeContext.Provider>
  );
}
