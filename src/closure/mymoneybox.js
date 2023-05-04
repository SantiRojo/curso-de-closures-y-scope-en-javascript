/* function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5); */

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
  }
  console.log(saveCoins);
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxZeus = moneyBox();
moneyBoxZeus(10);
moneyBoxZeus(20);
moneyBoxZeus(5);