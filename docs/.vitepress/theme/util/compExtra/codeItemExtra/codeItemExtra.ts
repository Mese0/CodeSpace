import {AFTER_RUN_CODE_ID, AfterRunCodeButtonElements, BeforeButtonsElements, SHARE_CODE_ID} from "./codeItemExtraEl";
import {useDiscreteApi} from "../../useDiscreteApi";
import {getTheme} from "../theme";
import {getCopiedElement} from "../copiedElement";


export function useCodeItemExtra(codeItems: HTMLElement) {
    if(!codeItems){
        return;
    }

    const firstDiv = codeItems.querySelector("*:first-child");
    const lastDiv = codeItems.querySelector(":scope > div:last-of-type");

    if(!firstDiv || !lastDiv){
        return;
    }

    firstDiv.insertAdjacentHTML(`beforebegin`, BeforeButtonsElements);
    lastDiv.insertAdjacentHTML(`afterend`, AfterRunCodeButtonElements);

    const afterRunCodeDiv = codeItems.querySelector(".cs-code-button-bottom") as HTMLElement;

    const copiedShareCodeButtonEl = getCopiedElement(document.getElementById(SHARE_CODE_ID) as HTMLElement);
    afterRunCodeDiv.appendChild(copiedShareCodeButtonEl);

    const copiedRunCodeButtonEl = getCopiedElement(document.getElementById(AFTER_RUN_CODE_ID) as HTMLElement)
    afterRunCodeDiv.appendChild(copiedRunCodeButtonEl);

    copiedShareCodeButtonEl.addEventListener("click", (e) => {
        shareCodeButtonEvent(e);
    });
}

function shareCodeButtonEvent(e: Event) {
    /*
    function _hasTabs(item: HTMLElement): [boolean, HTMLElement] {
        const tabs = item.querySelector(".tabs") as HTMLElement;
        return [!!tabs, tabs];
    }

    const [hasTabs, tabsEl] = _hasTabs(item);

    if(hasTabs) {
        const labelContent = tabsEl.querySelector("input[checked]")!.nextElementSibling.textContent;
        const copyButton = item.querySelector(".blocks")
            .querySelector(`.language-${labelContent}`)
            .querySelector("button.copy");

        console.log(labelContent);

        (copyButton as HTMLButtonElement).click();
    }
     */

    const targetClassName = "vp-code-group";

    let currentElement = e.target as HTMLElement;

    while (currentElement !== null && !currentElement.classList.contains(targetClassName)) {
        currentElement = currentElement.parentElement;
    }

    const blocks = currentElement.querySelector(".blocks") as HTMLElement;
    if(!blocks) {
        return;
    }

    const activeLanguage = blocks.querySelector(".active") as HTMLElement;
    (activeLanguage.querySelector("button.copy") as HTMLButtonElement).click();

    useDiscreteApi("message", getTheme().value).success("复制成功");
}