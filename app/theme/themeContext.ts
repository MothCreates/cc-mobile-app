import React, { createContext } from 'react';
import { Theme } from '@/lib/types';



type ThemeContextType = {
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: {
        background: '#ffffff',
        text: '#000000',
        color: '#000000',
        buttonText: '#666666',
        secondaryColor: '#ff4c4c',
        secondaryBackground: '#D3D3D3',
        name: 'light'
    }
});

export default ThemeContext;