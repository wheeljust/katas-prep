/*
Kata 14 - calculate the amount of change to return in each currency denomination
*/

const calculateChange = function(total, cash) {
  let changeBreakdown = {};
  let change = cash - total;

  /*
  Use 'change' as a tracking variable.  Keep track of the change left to denominate in currency.
  Each if statement checks the change tracking value to determine if there is enough change left to denominate in that bill or coin.
  Then, when a conditional is true, we use x to report back to the final object, a number of those bills or coins.
  Lastly, update change tracker using '%' remainder operator, and stay in the while loop until change = 0.
  */

  while (change > 0) {
    if (change >= 2000) {
      let x = change - (change % 2000);
      changeBreakdown.twentyDollar = x / 2000;
      change = change % 2000;
    } else if (change >= 1000) {
      let x = change - (change % 1000);
      changeBreakdown.tenDollar = x / 1000;
      change = change % 1000;
    } else if (change >= 500) {
      let x = change - (change % 500);
      changeBreakdown.fiveDollar = x / 500;
      change = change % 500;
    } else if (change >= 200) {
      let x = change - (change % 200);
      changeBreakdown.twoDollar = x / 200;
      change = change % 200;
    } else if (change >= 100) {
      let x = change - (change % 100);
      changeBreakdown.oneDollar = x / 100;
      change = change % 100;
    } else if (change >= 25) {
      let x = change - (change % 25);
      changeBreakdown.quarter = x / 25;
      change = change % 25;
    } else if (change >= 10) {
      let x = change - (change % 10);
      changeBreakdown.dime = x / 10;
      change = change % 10;
    } else if (change >= 5) {
      let x = change - (change % 5);
      changeBreakdown.nickel = x / 5;
      change = change % 5;
    } else if (change >= 1) {
      let x = change - (change % 1);
      changeBreakdown.penny = x / 1;
      change = change % 1;
    }
  }

  return changeBreakdown;
};


//Test cases below
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));