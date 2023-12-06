function getElementWidth(content, padding, border){
    let resolt = Number.parseFloat(content) + (Number.parseFloat(padding) * 2) + (Number.parseFloat(border) * 2);
    return resolt;
}