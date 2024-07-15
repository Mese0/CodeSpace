var theme = null;

export function getThemeIsNull() {
    return theme === null;
}

export function getTheme() {
    if(theme === null) {
        window["message"].error("未获取到主题信息");
        return;
    }

    return theme;
}

export function setTheme(isDark) {
    theme = isDark;
}