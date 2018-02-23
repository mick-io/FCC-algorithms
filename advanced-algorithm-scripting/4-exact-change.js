/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:
    Global Object
 */

var currencyMap = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 0.25,
  "DIME": 0.10,
  "NICKEL": 0.5,
  "PENNY": 0.1
};

function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;
  var closed = changeDue === 0;
  var insufficientFunds = changeDue < 0;
  var output;

  if (insufficientFunds) {
    output = "Insufficient Funds";
  } else if (closed) {
    output = "Closed";
  } else {
    output = returnChange(changeDue, cid);
  }
  return output;
}

function returnChange(changeDue, cid) {
  var currencyIndex = 0;
  var valueIndex = 1;
  var change = [];
  for (var i = cid.length - 1; i >= 0; i--) {
    var currency = cid[i][currencyIndex];
    var currencyValue = currencyMap[currency];
    var amountOfCurrency = cid[i][valueIndex];
    var changeInCurrency = 0;
    var isChangeDueDivisible = amountOfCurrency >= changeDue + currencyValue;
    var isCurrencyAvailable = amountOfCurrency > 0;

    while (isCurrencyAvailable && isChangeDueDivisible) {
      changeInCurrency += valueOfCurrency;
      amountOfCurrency -= valueOfCurrency;
      changeDue -= valueOfCurrency;
      isChangeDueDivisible = amountOfCashType >= changeDue + valueOfCashType;
      isCashTypeAvailable = amountOfCashType > 0;
    }

    change.push([currencyType, changeInCurrency]);
  }

  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
]);