'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

interface RegistryProps {
    children: React.ReactNode;
}

export default function StyledComponentsRegistry({
    children,
}: RegistryProps) {
    const [styledComponentsStyleSheet] = useState(
        () => new ServerStyleSheet()
    );

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        );
    }

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </StyleSheetManager>
    );
}