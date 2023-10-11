export function ConvertCurrency(price, fromCurrency, toCurrency) {
    let convertedPrice;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())

    .then(data => {
      convertedPrice = price * data.rates[toCurrency];
      console.log(convertedPrice);
    });
}

ConvertCurrency(100, 'USD', 'IDR')