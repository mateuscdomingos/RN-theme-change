export function toggleTheme(theme) {
    return {
        type: 'TOGGLE_THEME',
        theme,
    }
}

export function toggleFontSize(baseFont) {
    return {
        type: 'TOGGLE_FONTSIZE',
        baseFont,
    }
}