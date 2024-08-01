const sum = (addend1, addend2) => {
    return addend1 + addend2;
}




let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,
    "GBP": 0.87,
}
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueDollar) {
    let valueInEuro = valueDollar / oneEuroIs.USD;
    let valueYen = valueInEuro * oneEuroIs.JPY;
    return valueYen;
}
const fromYenToPound = function(valueYen) {
    let valueInPound = (valueYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}