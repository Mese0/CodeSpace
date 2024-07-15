import {useCodeItemExtra} from "./codeItemExtra/codeItemExtra";
import {getThemeIsNull, setTheme} from "./theme";

/**
 * isDark is a `refValue`.
 *
 * @example
 * import { useData } from "vitepress";
 *
 * const { isDark } = useData();
 *
 * window.extraItemLoader(isDark); // not `isDark.value`
 */
export function useExtraItemLoader(isDark) {
    if(getThemeIsNull()){
        setTheme(isDark);
    }

    if(location.pathname === "/") {
        return;
    }

    _useCodeItemExtra();
    _useFootnoteExtra();
}

function _useCodeItemExtra() {
    const page = location.pathname.replace(/\//g, "_").replace(".html", "");

    const currentPageDiv = document.querySelector(`.vp-doc.${page}`);

    const codeGroup = currentPageDiv.querySelectorAll(".vp-code-group") as NodeListOf<HTMLElement>;

    /*
     * 不希望有任何单独的 代码块 存在这个...
     * 因为需要重写内容
    const _languages = currentPageDiv.querySelectorAll('[class^="language-"]') as NodeListOf<HTMLElement>;

    const languages = Array.from(_languages).filter(el =>
        !el.className.includes("language-result")
    );

    const codeBlocks = [...Array.from(codeGroup), ...languages];
     */

    codeGroup.forEach(item => useCodeItemExtra(item));
}

function _useFootnoteExtra() {

}