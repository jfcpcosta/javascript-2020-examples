function getStock() {
    return {
        symbol: 'IBM',
        price: 100
    };
}

const { symbol, price } = getStock();

console.log(symbol, price);