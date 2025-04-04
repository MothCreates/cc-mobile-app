import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';

type Theme = {
    background: string;
    text: string;
    color: string;
    buttonText: string;
}

type ThemeContextType = {
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: {
        background: '#ffffff',
        text: '#000000',
        color: '#000000',
        buttonText: '#666666'
    }
});

export default ThemeContext;