export function selectionCheck (isSelected: boolean, newPage: string, errorMessage: string) : any {
    if(isSelected){
        location.href = `/${newPage}.html`;
    }
    else{
        window.alert(errorMessage);
    }
}