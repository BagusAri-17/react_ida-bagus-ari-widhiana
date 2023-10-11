const { ConvertCurrency } = require("./ConvertCurrency");

describe("convertCurrency function", () => {
  it("convert currency berhasil", () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    .then(data => {
      let result = ConvertCurrency(100, 'USD', 'IDR');
      expect(result).toEqual(100 * data.rates['IDR']);
    });
  });
});