var money = [
    {name: 'ONE HUNDRED', value: 100.0},
    {name: 'TWENTY', value: 20.0},
    {name: 'TEN', value: 10.0},
    {name: 'FIVE', value: 5.0},
    {name: 'ONE', value: 1.0},
    {name: 'QUARTER', value: 0.25},
    {name: 'DIME', value: 0.1},
    {name: 'NICKEL', value: 0.05},
    {name: 'PENNY', value: 0.01}
];

function checkCashRegister(price, cash, cid) {
    var output = {status: null, change: [] };
    var change = cash - price;

    var register = cid.reduce(
        function(acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        },
        {total: 0}
    );

    if (register.total === change)
}