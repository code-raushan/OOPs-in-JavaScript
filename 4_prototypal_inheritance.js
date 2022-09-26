//Function Constructor Inheritance 
function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
   
}
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
} 
//Do not use arrow functions with prototype because, the 'this' keyword will then take global object(window) reference.
BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}
function SavingAccount(customerName, balance=0){
    BankAccount.call(this, customerName, balance); //constructor linking
    this.transactionLimit = 10000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype); //prototype linking
SavingAccount.prototype.takePersonalLoan = function(amount){
    console.log('Taking Personal Loan of '+amount);
}

function CurrentAccount(customerName, balance=0){
    BankAccount.call(this, customerName, balance); //constructor linking
    this.transactionLimit = 100000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype); //prototype linking
CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('Taking Business Loan of '+amount);
}
function CorporateAccount(customerName, balance=0){
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 1000000;
}
CorporateAccount.prototype = Object.create(BankAccount.prototype);
CorporateAccount.prototype.takingCorporateLoan = function(amount){
    console.log('Taking Corporate Loan of '+amount);
}
const normalAccount = new BankAccount('Normal', 1000);
console.log(normalAccount);
const raushanAccount = new SavingAccount('Raushan K', 1455);
console.log(raushanAccount);
const rajAccount = new CurrentAccount('Raj K', 4522);
console.log(rajAccount);
const amazonAccount = new CorporateAccount('Amazon Inc.', 10000);
console.log(amazonAccount);