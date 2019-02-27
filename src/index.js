// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};


    if (currency >= 50) {
        obj.H = Math.floor(currency/50);
        currency -= 50 * obj.H;
    }

    if (currency >= 25) {
        obj.Q = Math.floor(currency/25);
        currency -= 25 * obj.Q;
    }

    if (currency >= 10) {
        obj.D = Math.floor(currency/10);
        currency -= 10 * obj.D;
    }

    if (currency % 10 >= 5) {
        obj.N = 1;
        currency -= 5;
    }

    if (currency % 5) obj.P = currency % 5

    return obj;
}
