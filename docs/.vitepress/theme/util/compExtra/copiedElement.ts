const CS_COPIED_ELEMENT = "cs-copied-element";

export function getCopiedElement(target: HTMLElement): HTMLElement {
    const result = target.cloneNode(true) as HTMLElement;
    result.classList.add(CS_COPIED_ELEMENT);

    if(target.classList.contains(CS_COPIED_ELEMENT)){
        return result;
    }

    target.remove();

    return result;
}