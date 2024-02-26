export function selectionCheck(isSelected, newPage, errorMessage) {
    if (isSelected) {
        location.href = `/${newPage}.html`;
    }
    else {
        window.alert(errorMessage);
    }
}
