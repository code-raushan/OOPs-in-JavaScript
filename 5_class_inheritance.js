class BankAccount{
    constructor(customerName, balance=0){
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        this.balance -= amount;
    }
}
class SavingsAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance=0){
        super(customerName, balance)
    }
    takePersonalLoan(amount){
        console.log('Taking Personal Loan of ' +amount);
    }
}
class CurrentAccount extends BankAccount{
    transactionLimit = 1000000;
    constructor(customerName, balance=0){
        super(customerName, balance);
    }
    takeBusinessLoan(amount){
        console.log('Taking Business Loan of '+amount);
    }
}
const raushanAccount = new SavingsAccount('Raushan K', 10000);
console.log(raushanAccount);
//We can see the code for class inheritance is more readable and understandable.
//But under the hood, class inheritance also uses prototypal inheritance.