import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { darkColors, lightColors, ThemeColors } from "../../config/theme/themeGlobals";
import { useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;

    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: PropsWithChildren) => {

    const colorScheme = useColorScheme(); // Para detectar el color de sisteme del dispositivo
    const [currenTheme, setCurrenTheme] = useState<ThemeColor>('light');

    const isDark = currenTheme === 'dark';
    const colors = isDark ? darkColors : lightColors;

    useEffect(() => {
        if (colorScheme === "dark") {
            setCurrenTheme("dark")
        } else {
            setCurrenTheme("light")
        }
    }, [colorScheme])



    const handleChangeSetTheme = (theme: ThemeColor) => {
        setCurrenTheme(theme);
    };

    return (
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
            <ThemeContext.Provider
                value={{
                    currentTheme: currenTheme,
                    colors: colors,
                    setTheme: handleChangeSetTheme
                }}
            >
                {children}
            </ThemeContext.Provider>
        </NavigationContainer>
    )
}