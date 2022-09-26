class BankAccount{
    customerName;
    accountNumber;
    #balance = 0; //private fields, can only be accessed in the same class not even in its subclass.
    
    constructor(customerName, balance=0){
        this.customerName=customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;

    }
    //setter
    set balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not a valid input')
        }
        this.#balance = amount;
    }
    //getter
    get balance(){
        return this.#balance;
    }
    //private method
    #calculatingInterest(amount){
        console.log('calculating interest for the loan');
    }
    deposit(amount){
        this.#balance += balance;
    }
    withdraw(amount){
        this.#balance -= balance;
    }
    takingNormalLoan(amount){
        console.log('Taking normal loan of amount '+amount);
        this.#calculatingInterest;
    }
}
class SavingsAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance=0){
        super(customerName, balance);
    }
    takingPersonalLoan(amount){
        console.log('Taking Personal Loan of '+amount);
    }
}
const newAccount = new BankAccount('Raushan Kumar', 10000);
newAccount.balance = 7000;
console.log(newAccount.balance); //not callble because of get keyword.