/* 
Getter (get): You check your current bank balance.
Setter (set): You update your bank balance, but the bank checks whether the new value is valid.
*/


class BankAccount {
    private _balance: number = 1000;

    // Getter: read the balance
    get balance(): number {
        return this._balance;
    }

    // Setter: update the balance
    set balance(amount: number) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.log("Balance cannot be negative!");
        }
    }
}

const account = new BankAccount();

// Using the getter
console.log(account.balance); // 1000

// Using the setter
account.balance = 5000;
console.log(account.balance); // 5000

// // Trying to set an invalid balance
account.balance = -500;
console.log(account.balance); // 5000