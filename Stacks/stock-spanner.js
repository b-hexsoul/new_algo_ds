var StockSpanner = function () {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  console.log("-------RUNNING------", price);
  let answer = 1;
  while (this.prices.length && this.prices[this.prices.length - 1][0] <= price) {
    answer += this.prices.pop()[1];
    console.log("answer", answer);
    console.log("prices", this.prices);
  }
  this.prices.push([price, answer]);
  return answer;
};

const spanner = new StockSpanner();
spanner.next(100);
spanner.next(80);
spanner.next(60);
spanner.next(70);
spanner.next(60);
spanner.next(75);
spanner.next(85);
